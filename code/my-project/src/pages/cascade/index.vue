<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="vw-cells_title">省市区级联</view>
      <vw-cascade :size="26" :textSize="24" :itemList="cityTree"></vw-cascade>
      <view class="vw-cells_title">班级级联</view>
      <vw-cascade :size="26" :textSize="24" :itemList="classTree" :defaultItemList="defaultClassTree"></vw-cascade>

      <view class="btn-block">
        <button type="primary" @click="modalVisible=true">弹出打开</button>
      </view>
      <vw-modal :visible="modalVisible" position="bottom" @overlayClose="close">
        <view class="vw-cells_title">省市区级联</view>
        <vw-cascade :size="26" :textSize="24" :itemList="cityTree" @complete="completeFun"></vw-cascade>
      </vw-modal>
    </view>
  </view>
</template>

<script>
import cityData from "@/utils/city.js";
export default {
  data() {
    return {
      modalVisible: false,
      cityTree: cityData,
      classTree: [
        {
          text: "高一(1)班",
          subText: "30人",
          value: 101,
          children: [
            {
              text: "张三",
              subText: "男",
              value: 10101,
            },
            {
              text: "李四",
              subText: "男",
              value: 10102,
            },
          ],
        },
        {
          text: "高一(2)班",
          subText: "30人",
          value: 102,
          children: [
            {
              text: "董三",
              subText: "男",
              value: 10201,
            },
            {
              text: "赵四",
              subText: "男",
              value: 10202,
            },
          ],
        },
      ],
      defaultClassTree: [
        {
          text: "高一(1)班",
          subText: "30人",
          value: 101,
          index: 0,
          list: [
            {
              text: "高一(1)班",
              subText: "30人",
              value: 101,
            },
            {
              text: "高一(2)班",
              subText: "30人",
              value: 102,
            },
          ],
        },
        {
          text: "张三",
          subText: "男",
          value: 10101,
          index: 0,
          list: [
            {
              text: "张三",
              subText: "男",
              value: 10101,
            },
            {
              text: "李四",
              subText: "男",
              value: 10102,
            },
          ],
        },
      ],
    };
  },
  computed: {},
  onLoad() {},
  methods: {
    completeFun(e) {
      this.$toast("您选择的数据为：" + e.text);
      this.modalVisible = false;
    },
    close() {
      this.modalVisible = false;
    },
  },
};
</script>

<style scoped>
.btn-block {
  padding: 40rpx;
}
</style>>

