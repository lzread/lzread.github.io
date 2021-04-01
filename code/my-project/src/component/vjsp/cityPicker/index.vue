<template>

  <view>
    <picker :value="defaultValue" mode="multiSelector" @change="picker" @columnchange="columnPicker" :range="multiArray">
      <view class="vw-picker-placeholder" v-if="placeholder && defaultText == ''">{{ placeholder }}</view>
      <view class="vw-picker-text" v-else>{{ defaultText }}</view>
    </picker>
  </view>

</template>

<script>
import cityData from "@/utils/city.js";
export default {
  name: "VwCityPicker",
  props: {
    placeholder: String,
    text: {
      type: String,
      default: "",
    },
    value: {
      type: Array,
      default: function () {
        return [0, 0, 0];
      },
    },
  },
  data() {
    return {
      defaultValue: [0, 0, 0],
      defaultText: "",
      selectList: cityData, //接口返回picker数据,此处就直接使用本地测试数据
      multiArray: [], //picker数据
    };
  },
  watch: {
    value(val) {
      this.defaultValue = val;
    },
    text(val) {
      this.defaultText = val;
    },
  },
  created() {
    let provice = this.toArr(this.selectList);
    let city = this.toArr(this.selectList[0].children);
    let district = this.toArr(this.selectList[0].children[0].children);
    this.multiArray = [provice, city, district];

    this.picker({
      detail: {
        value: this.value,
      },
    });

    this.columnPicker({
      detail: {
        column: 0,
        value: this.value[0],
      },
    });

    this.columnPicker({
      detail: {
        column: 1,
        value: this.value[1],
      },
    });

    this.columnPicker({
      detail: {
        column: 2,
        value: this.value[2],
      },
    });
  },

  methods: {
    picker: function (e) {
      let value = e.detail.value;
      if (this.selectList.length > 0) {
        let provice = this.selectList[value[0]].text;
        let city = this.selectList[value[0]].children[value[1]].text;
        let district = "";
        try {
          district = this.selectList[value[0]].children[value[1]].children[
            value[2]
          ].text;
        } catch (error) {
          district = "";
        }
        this.defaultText = provice + " " + city + " " + district;

        let key = "";

        try {
          key = this.selectList[value[0]].children[value[1]].children[value[2]]
            .value;
        } catch (error) {
          key = this.selectList[value[0]].children[value[1]].value;
        }

        this.$emit("callback", key);
      }
    },
    toArr(object) {
      let arr = [];
      for (let i in object) {
        arr.push(object[i].text);
      }
      return arr;
    },
    columnPicker: function (e) {
      //第几列 下标从0开始
      let column = e.detail.column;
      //第几行 下标从0开始
      let value = e.detail.value;

      if (column === 0) {
        this.multiArray = [
          this.multiArray[0],
          this.toArr(this.selectList[value].children),
          this.toArr(this.selectList[value].children[0].children),
        ];

        this.defaultValue = [value, 0, 0];
      } else if (column === 1) {
        this.multiArray = [
          this.multiArray[0],
          this.multiArray[1],
          this.toArr(
            this.selectList[this.defaultValue[0]].children[value].children
          ),
        ];
        this.defaultValue = [this.defaultValue[0], value, 0];
      } else {
        this.multiArray = [
          this.multiArray[0],
          this.multiArray[1],
          this.multiArray[2],
        ];
        this.defaultValue = [this.defaultValue[0], this.defaultValue[1], value];
      }
    },
  },
};
</script>
