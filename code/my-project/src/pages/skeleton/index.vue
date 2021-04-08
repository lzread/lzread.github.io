<template>
  <view>
    <vw-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></vw-skeleton>

    <view class="uni-padding-wrap uni-common-mt vw-skeleton">

      <view class="vw-cells">
        <view class="vw-cell vw-cell_status">
          <view class="vw-cell_hd "><em data-status="1" class="vw-skeleton-fillet">处理中</em></view>
          <view class="vw-cell_bd">
            <p class="vw-skeleton-rect">苏F 22U33</p>
          </view>
        </view>
        <view class="vw-cell vw-cell_status">
          <view class="vw-cell_hd"><em data-status="2" class="vw-skeleton-fillet">未处理</em></view>
          <view class="vw-cell_bd">
            <p class="vw-skeleton-rect">苏F 22U33</p>
          </view>

        </view>
        <view class="vw-cell vw-cell_status">
          <view class="vw-cell_hd"><em data-status="3" class="vw-skeleton-fillet">已办结</em></view>
          <view class="vw-cell_bd">
            <p class="vw-skeleton-rect">苏F 22U33</p>
          </view>

        </view>
      </view>

      <view class="vw-cells">
        <navigator class="vw-cell  vw-cell_access vw-cell_example" href="javascript:">
          <view class="vw-cell_hd"><img class="vw-skeleton-rect" src="@/asset/pic_96x96.png"></view>
          <view class="vw-cell_bd">
            <p class="vw-skeleton-fillet">cell standard</p>
          </view>

        </navigator>
        <navigator class="vw-cell  vw-cell_access vw-cell_example" href="javascript:">
          <view class="vw-cell_hd"><img class="vw-skeleton-rect" src="@/asset/pic_96x96.png"></view>
          <view class="vw-cell_bd">
            <p class="vw-skeleton-fillet">cell standard</p>
          </view>

        </navigator>
        <navigator class="vw-cell  vw-cell_access vw-cell_example" href="javascript:">
          <view class="vw-cell_hd"><img class="vw-skeleton-rect" src="@/asset/pic_96x96.png"></view>
          <view class="vw-cell_bd">
            <p class="vw-skeleton-fillet">cell standard</p>
          </view>

        </navigator>
        <navigator class="vw-cell  vw-cell_access vw-cell_example" href="javascript:">
          <view class="vw-cell_hd"><img class="vw-skeleton-rect" src="@/asset/pic_96x96.png"></view>
          <view class="vw-cell_bd">
            <p class="vw-skeleton-fillet">cell standard</p>
          </view>

        </navigator>
      </view>

      <view class="vw-demo">

        <uni-view class="vw-tag vw-primary vw-skeleton-fillet" style="width:200rpx; height:60rpx; margin-bottom:30rpx">实心标签</uni-view>

        <uni-view class="vw-tag vw-primary vw-skeleton-fillet" style="width:200rpx; height:60rpx; margin-bottom:30rpx">实心标签</uni-view>

        <uni-view class="vw-tag vw-primary vw-skeleton-fillet" style="width:200rpx; height:60rpx; margin-bottom:30rpx">实心标签</uni-view>

        <uni-view class="vw-tag vw-primary vw-skeleton-fillet" style="width:200rpx; height:60rpx; margin-bottom:30rpx">实心标签</uni-view>

        <uni-view class="vw-tag vw-primary vw-skeleton-fillet" style="width:200rpx; height:60rpx; margin-bottom:30rpx">实心标签</uni-view>

        <text class="vw-skeleton-rect">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio explicabo asperiores quidem quos distinctio recusandae culpa omnis blanditiis sit in eaque perspiciatis tenetur id illo quae dignissimos, voluptatem voluptate? Molestiae.</text>

      </view>

    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      skeletonShow: true,
    };
  },
  onLoad() {
    setTimeout(() => {
      this.skeletonShow = false;
    }, 1800);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
em[data-status="1"] {
  background-color: $uni-color-primary;
  color: #fff;
}

em[data-status="2"] {
  background-color: $uni-color-success;
  color: #fff;
}

em[data-status="3"] {
  background-color: $uni-color-warning;
  color: #fff;
}
.vw-demo {
  padding: 20rpx;
  background-color: #fff;
}
</style>
