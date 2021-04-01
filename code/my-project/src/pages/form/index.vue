<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">

      <view class="vw-form_footer">
        <vw-button type="green">页面主操作</vw-button>
      </view>

      <form @submit="formSubmit" @reset="formReset" class="vw-form">
        <view class="vw-cells_title">
          基础表单
        </view>
        <view class="vw-cells">
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">上报标题：</label>
            </view>
            <view class="vw-cell_bd">
              <input type="text" placeholder="请填写标题">
            </view>
          </view>
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">事发位置：</label>
            </view>
            <view class="vw-cell_bd">
              <input type="text">
            </view>
            <view class="vw-cell_ft">
              <vw-icon name="plus" size="20"></vw-icon>
            </view>
          </view>
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">联系人：</label>
            </view>
            <view class="vw-cell_bd">
              <input type="text" placeholder="请填写联系人">
            </view>
          </view>
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">电话：</label>
            </view>
            <view class="vw-cell_bd">
              <input type="tel" placeholder="请填写联系电话" maxlength="11">
            </view>
          </view>
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">开关：</label>
            </view>
            <view class="vw-cell_bd">
              <switch />
            </view>
          </view>
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">开关：</label>
            </view>
            <view class="vw-cell_bd">
            </view>
            <view class="vw-cell_ft">
              <switch />
            </view>
          </view>
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">文本选择器：</label>
            </view>
            <view class="vw-cell_bd">
              <picker @change="bindPickerChange" :value="index" :range="array">
                <view class="uni-input">{{array[index]}}</view>
              </picker>
            </view>
          </view>
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">时间选择器：</label>
            </view>
            <view class="vw-cell_bd">
              <picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
                <view class="uni-input">{{time}}</view>
              </picker>
            </view>
          </view>
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">日期选择器：</label>
            </view>
            <view class="vw-cell_bd">
              <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
                <view class="uni-input">{{date}}</view>
              </picker>
            </view>
          </view>

          <view class="vw-cell vw-cell-textarea">
            <view class="vw-cell_hd">
              <label class="vw-label">多行文本框：</label>
            </view>
            <view class="vw-cell_bd">
              <textarea placeholder-style="color:#F76260" placeholder="占位符字体是红色的" />
            </view>
          </view>
        </view>

      </form>

    </view>
  </view>
</template>

<script>
export default {
  data() {
    const currentDate = this.getDate({
      format: true,
    });
    return {
      index: 0,
      time: "12:01",
      date: currentDate,
      array: ["中国", "美国", "巴西", "日本"],
    };
  },
  computed: {
    startDate() {
      return this.getDate("start");
    },
    endDate() {
      return this.getDate("end");
    },
  },
  onLoad() {},
  methods: {
    bindPickerChange: function (e) {
      console.log("picker发送选择改变，携带值为", e.target.value);
      this.index = e.target.value;
    },
    bindTimeChange(e) {
      this.time = e.target.value;
    },
    bindDateChange: function (e) {
      this.date = e.target.value;
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === "start") {
        year = year - 60;
      } else if (type === "end") {
        year = year + 2;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    },
    formSubmit() {},
    formReset() {},
  },
};
</script>

<style>
</style>
