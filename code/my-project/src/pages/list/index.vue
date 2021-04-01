<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">

      <view class="vw-cells">
        <view class="vw-cell vw-cell_status">
          <view class="vw-cell_hd"><em data-status="1">处理中</em></view>
          <view class="vw-cell_bd">
            <p>苏F 22U33</p>
          </view>
          <view class="vw-cell_ft">2021-01-15</view>
        </view>
        <view class="vw-cell vw-cell_status">
          <view class="vw-cell_hd"><em data-status="2">未处理</em></view>
          <view class="vw-cell_bd">
            <p>苏F 22U33</p>
          </view>
          <view class="vw-cell_ft">2021-01-15</view>
        </view>
        <view class="vw-cell vw-cell_status">
          <view class="vw-cell_hd"><em data-status="3">已办结</em></view>
          <view class="vw-cell_bd">
            <p>苏F 22U33</p>
          </view>
          <view class="vw-cell_ft">2021-01-15</view>
        </view>
      </view>

      <view class="vw-cells">
        <navigator class="vw-cell">
          <view class="vw-cell_bd">
            <p>cell standard</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </navigator>
        <navigator class="vw-cell">
          <view class="vw-cell_bd">
            <p>cell standard</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </navigator>
        <navigator class="vw-cell">
          <view class="vw-cell_bd">
            <p>cell standard</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="about" size="20"></vw-icon>
          </view>
        </navigator>
      </view>

      <view class="vw-cells">
        <navigator class="vw-cell">
          <view class="vw-cell_bd">
            <p>cell standard</p>
          </view>
          <view class="vw-cell_ft">说明文字</view>
        </navigator>
        <navigator class="vw-cell">
          <view class="vw-cell_bd">
            <p>cell standard</p>
          </view>
          <view class="vw-cell_ft">说明文字</view>
        </navigator>
      </view>

      <view class="vw-cells">
        <navigator class="vw-cell  vw-cell_access vw-cell_example" href="javascript:">
          <view class="vw-cell_hd"><img src="@/asset/pic_96x96.png"></view>
          <view class="vw-cell_bd">
            <p>cell standard</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </navigator>
        <navigator class="vw-cell  vw-cell_access vw-cell_example" href="javascript:">
          <view class="vw-cell_hd"><img src="@/asset/pic_96x96.png"></view>
          <view class="vw-cell_bd">
            <p>cell standard</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </navigator>
      </view>

      <view class="vw-cells">
        <navigator class="vw-cell  vw-cell_access vw-cell_example" href="javascript:">
          <view class="vw-cell_hd"><img src="@/asset/pic_96x96.png"></view>
          <view class="vw-cell_bd">
            <p>cell standard</p>
          </view>
          <view class="vw-cell_ft">说明文字</view>
        </navigator>
        <navigator class="vw-cell  vw-cell_access vw-cell_example" href="javascript:">
          <view class="vw-cell_hd"><img src="@/asset/pic_96x96.png"></view>
          <view class="vw-cell_bd">
            <p>cell standard</p>
          </view>
          <view class="vw-cell_ft">说明文字</view>
        </navigator>
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
  methods: {},
};
</script>

<style lang="scss" scoped>
.vw-cells {
  margin-top: 30rpx;
}
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
</style>
