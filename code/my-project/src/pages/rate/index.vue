<template>
  <view class="container">
    <view class="vw-rate-container">
      <view class="vw-title"> 基本用法</view>
      <vw-rate :current="current" @change="change"></vw-rate>
    </view>
    <view class="vw-rate-container">
      <view class="vw-title">设置星星数</view>
      <vw-rate :current="index" :quantity="8" @change="change"></vw-rate>
    </view>
    <view class="vw-rate-container">
      <view class="vw-title">设置尺寸大小(缩小)</view>
      <vw-rate :current="index" @change="change" :size="16"></vw-rate>
    </view>
    <view class="vw-rate-container">
      <view class="vw-title">设置尺寸大小(放大)</view>
      <vw-rate :current="index" @change="change" :size="26"></vw-rate>
    </view>
    <view class="vw-rate-container">
      <view class="vw-title"> 设置颜色</view>
      <vw-rate :current="index" @change="change" normal="#ccc" active="#ff7900"></vw-rate>
    </view>
    <view class="vw-rate-container">
      <view class="vw-title">未选中为空心</view>
      <vw-rate :current="index" :hollow="true" @change="change"></vw-rate>
    </view>
    <view class="vw-rate-container">
      <view class="vw-title">不可点击</view>
      <vw-rate :current="index" @change="change" :disabled="true"></vw-rate>
    </view>
    <view class="vw-rate-container">
      <view class="vw-title">不可点击(3.45星)</view>
      <vw-rate :current="4" :disabled="true" :score="0.45"></vw-rate>
    </view>
    <view class="vw-rate-container">
      <view class="vw-title">不可点击(3星半)</view>
      <vw-rate :current="4" :disabled="true" :score="0.5"></vw-rate>
    </view>
    <view class="vw-rate-container">
      <view class="vw-title">不可点击(3.55星)</view>
      <vw-rate :current="4" :disabled="true" :score="0.55"></vw-rate>
    </view>
    <view class="vw-rate-container">
      <view class="vw-title">不可点击(3.6星)</view>
      <vw-rate :current="4" active="#ff7900" :hollow="true" :disabled="true" :score="0.6"></vw-rate>
    </view>

  </view>
</template>

<script>
export default {
  data() {
    return {
      loadding: false,
      show: false,
      current: 0,
      index: 3,
    };
  },
  onLoad() {},
  methods: {
    change: function (e) {
      this.index = e.index;
      this.current = e.index;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20rpx 0 120rpx 0;
  box-sizing: border-box;
}

.header {
  padding: 80rpx 90rpx 60rpx 90rpx;
  box-sizing: border-box;
}

.title {
  font-size: 34rpx;
  color: #333;
  font-weight: 500;
}

.sub-title {
  font-size: 24rpx;
  color: #7a7a7a;
  padding-top: 18rpx;
}

.vw-rate-container {
  padding: 40rpx;
  box-sizing: border-box;
  margin-bottom: 30rpx;
  background: #fff;
  font-size: 30rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vw-title {
  font-size: 30rpx;
}
</style>