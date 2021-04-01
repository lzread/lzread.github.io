<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <form @submit="formSubmit" @reset="formReset" class="vw-form">
        <view class="vw-cells_title">基础用法</view>
        <view class="vw-cells">
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">姓名：</label>
            </view>
            <view class="vw-cell_bd">
              <input type="text" placeholder="收货人姓名" />
            </view>
          </view>
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">电话：</label>
            </view>
            <view class="vw-cell_bd">
              <input type="tel" maxlength="11" placeholder="收货人手机号" />
            </view>
          </view>
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">地区：</label>
            </view>
            <view class="vw-cell_bd">
              <vw-city-picker :value="[5,2,4]" @callback="callback" placeholder="请选择地区"></vw-city-picker>
            </view>
          </view>
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">详细地址：</label>
            </view>
            <view class="vw-cell_bd">
              <input type="text" placeholder="街道门牌、楼层房间号等信息" />
            </view>
          </view>
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">邮政编码：</label>
            </view>
            <view class="vw-cell_bd">
              <input type="tel" maxlength="6" placeholder="邮政编码" />
            </view>
          </view>
        </view>
        <view class="vw-cells">
          <view class="vw-cell">
            <view class="vw-cell_hd">
              <label class="vw-label">设为默认收货地址：</label>
            </view>
            <view class="vw-cell_bd"> </view>
            <view class="vw-cell_ft">
              <switch />
            </view>
          </view>
        </view>
      </form>

      <view class="vw-form_bottom">
        <vw-button type="green" shape="circle">保存</vw-button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},

  methods: {
    callback(val) {
      console.log(val);
    },
  },
};
</script>

<style></style>
