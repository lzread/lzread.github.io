<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="vw-cells_title">alert 示例</view>
      <view class="example-body">
        <vw-button :size="24" width="200rpx" height="80rpx" margin="20rpx" type="primary" @click="toggle('1')"><text class="button-text">基础用法</text></vw-button>
        <vw-button :size="24" width="200rpx" height="80rpx" margin="20rpx" type="primary" @click="toggle('2')"><text class="button-text">改变标题文字</text></vw-button>
        <vw-button :size="24" width="200rpx" height="80rpx" margin="20rpx" type="primary" @click="toggle('3')"><text class="button-text">改变按钮文字</text></vw-button>
        <vw-button :size="24" width="200rpx" height="80rpx" margin="20rpx" type="primary" @click="toggle('4')"><text class="button-text">按钮回调</text></vw-button>
      </view>

      <view class="vw-cells_title">confirm 示例</view>
      <view class="example-body">
        <vw-button :size="24" width="200rpx" height="80rpx" margin="20rpx" type="primary" @click="toggle('10')"><text class="button-text">基础用法</text></vw-button>
        <vw-button :size="24" width="200rpx" height="80rpx" margin="20rpx" type="primary" @click="toggle('11')"><text class="button-text">按钮回调</text></vw-button>
      </view>

      <view class="vw-cells_title">loading 示例</view>
      <view class="example-body">
        <vw-button :size="24" width="200rpx" height="80rpx" margin="20rpx" type="primary" @click="toggle('20')"><text class="button-text">基础用法</text></vw-button>
        <vw-button :size="24" width="200rpx" height="80rpx" margin="20rpx" type="primary" @click="toggle('21')"><text class="button-text">自定义文字</text></vw-button>
      </view>

      <view class="vw-cells_title">toast 示例</view>
      <view class="example-body">
        <vw-button :size="24" width="200rpx" height="80rpx" margin="20rpx" type="primary" @click="toggle('30')"><text class="button-text">基础用法</text></vw-button>
      </view>

    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {},
  methods: {
    toggle(type) {
      switch (type) {
        case "1":
          this.$alert("这是一段提示文字！！！");
          break;
        case "2":
          this.$alert({
            title: "自定义标题",
            message: "这是一段提示文字！！！",
          });
          break;
        case "3":
          this.$alert({
            message: "这是一段提示文字！！！",
            buttonText: "OK",
          });
          break;
        case "4":
          this.$alert({
            message: "这是一段提示文字！！！",
            callback: () => {
              alert();
            },
          });
          break;
        case "10":
          this.$confirm({
            title: "自定义标题",
            message: "这是一段提示文字！！！",
          });
          break;
        case "11":
          this.$confirm({
            message: "这是一段提示文字！！！",
            buttonCancelText: "cancel",
            buttonSubmitText: "submit",
            cancelCallback: () => {
              this.$alert("点击了取消按钮");
            },
            submitCallback: () => {
              this.$alert("点击了确定按钮");
            },
          });
          break;
        case "20":
          let loading = this.$loading();
          setTimeout(() => {
            loading.close();
          }, 3000);
          break;
        case "21":
          let loading1 = this.$loading("加载中...");
          setTimeout(() => {
            loading1.close();
          }, 3000);
          break;
        case "30":
          this.$toast("用户名不能为空");
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.example-body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20rpx;
  background-color: #ffffff;
  uni-button {
    margin: 20rpx;
  }
}
</style>
