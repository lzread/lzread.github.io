<template>
  <view class="container">
    <view class="vw-title">默认按钮</view>
    <view class="vw-btn-box">
      <vw-button>页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button disabled loading>页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button disabled loading disabledGray>禁用背景为灰色</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="white">页面次要操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="white" disabled loading>页面次要操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="danger">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="danger" disabled loading>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="danger" disabled loading disabledGray>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="warning">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="warning" disabled>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="green">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="green" disabled>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="blue">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="blue" disabled>页面辅助操作 Disabled</vw-button>
    </view>

    <view class="vw-btn-box">
      <vw-button type="gray">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="gray" disabled>页面辅助操作 Disabled</vw-button>
    </view>

    <view class="vw-btn-box">
      <vw-button type="black">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="black" disabled>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-title">空心按钮</view>
    <view class="vw-btn-box">
      <vw-button plain>页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button plain disabled loading>页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="danger" plain>页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="danger" plain link>页面辅助操作 link</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="danger" plain disabled loading>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="warning" plain>页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="warning" plain link>页面辅助操作 link</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="warning" plain disabled>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="green" plain>页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="green" plain disabled>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="black" plain>页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="black" plain disabled>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-title">圆角按钮</view>
    <view class="vw-btn-box">
      <vw-button shape="circle">页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" disabled loading>页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" disabled loading disabledGray>禁用背景为灰色</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" type="white">页面次要操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" type="white" disabled loading>页面次要操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" type="danger">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" type="danger" disabled loading>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" type="danger" disabled loading disabledGray>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" type="warning">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" type="warning" disabled>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" type="green">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" type="green" disabled>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" type="blue">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" type="blue" disabled>页面辅助操作 Disabled</vw-button>
    </view>

    <view class="vw-btn-box">
      <vw-button shape="circle" type="gray">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" type="gray" disabled>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" type="black">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="circle" type="black" disabled>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-title">平角按钮</view>
    <view class="vw-btn-box">
      <vw-button shape="rightAngle">页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="rightAngle" disabled loading>页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="rightAngle" disabled loading disabledGray>禁用背景为灰色</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="rightAngle" type="white">页面次要操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="rightAngle" type="white" disabled loading>页面次要操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="rightAngle" type="danger">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="rightAngle" type="danger" disabled loading>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="rightAngle" type="danger" disabled loading disabledGray>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="rightAngle" type="warning">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="rightAngle" type="warning" disabled>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="rightAngle" type="green">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shape="rightAngle" type="green" disabled>页面辅助操作 Disabled</vw-button>
    </view>

    <view class="vw-title">带阴影按钮</view>

    <view class="vw-btn-box">
      <vw-button shadow>页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shadow disabled loading>页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shadow type="danger">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shadow type="danger" disabled loading>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shadow type="warning">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shadow type="warning" disabled>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shadow type="green">页面辅助操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button shadow type="green" disabled>页面辅助操作 Disabled</vw-button>
    </view>
    <view class="vw-title">渐变按钮</view>
    <view class="vw-btn-box">
      <vw-button type="gradual">页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="gradual" shadow>页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button type="gradual" shadow disabled loading>页面主操作</vw-button>
    </view>

    <view class="vw-title">扩展色</view>
    <view class="vw-btn-box">
      <vw-button bold type="gray-primary">页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button bold type="gray-green">页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button bold type="gray-danger">页面主操作</vw-button>
    </view>
    <view class="vw-btn-box">
      <vw-button bold type="gray-warning">页面主操作</vw-button>
    </view>
    <view class="vw-title">自定义尺寸按钮</view>

    <view class="vw-flex-box">
      <vw-button margin="0 20rpx 26rpx 0" width="280rpx" height="90rpx" :size="32">页面主操作</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="danger" width="280rpx" height="90rpx" :size="32">辅助操作</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="green" width="280rpx" height="90rpx" :size="32">辅助操作</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="green" shape="circle" width="280rpx" height="90rpx" :size="32">辅助操作</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="green" plain width="280rpx" height="90rpx" :size="32">辅助操作</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="green" plain shape="circle" width="280rpx" height="90rpx" :size="32">辅助操作</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" width="200rpx" height="80rpx" :size="28">页面主操作</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="danger" width="200rpx" height="80rpx" :size="28">辅助操作</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="green" width="200rpx" height="80rpx" :size="28">辅助操作</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" width="160rpx" height="70rpx" :size="24">160*70</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="danger" width="160rpx" height="70rpx" :size="24">160*70</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="green" width="160rpx" height="70rpx" :size="24">160*70</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" width="140rpx" height="60rpx" :size="24">140*60</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="danger" width="140rpx" height="60rpx" :size="24">140*60</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="green" width="140rpx" height="60rpx" :size="24">140*60</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" width="100rpx" height="50rpx" :size="24">small</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="danger" width="100rpx" height="50rpx" :size="24">small</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="green" width="100rpx" height="50rpx" :size="24">small</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="green" shape="circle" width="100rpx" height="50rpx" :size="24">small</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="green" plain width="100rpx" height="50rpx" :size="24">small</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="green" plain shape="circle" width="100rpx" height="50rpx" :size="24">small</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="green" plain shape="rightAngle" width="100rpx" height="50rpx" :size="24">small</vw-button>
      <vw-button margin="0 20rpx 26rpx 0" type="green" shadow width="100rpx" height="50rpx" :size="24">small</vw-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.container {
  padding: 20rpx 30rpx 40rpx 30rpx;
  box-sizing: border-box;
}

.vw-title {
  padding: 30rpx 0;
  font-size: 32rpx;
  color: #333;
  font-weight: bold;
}

.vw-btn-box {
  margin-bottom: 26rpx;
}

.vw-flex-box {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
