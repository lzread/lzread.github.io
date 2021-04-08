<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="vw-cells_title">表单组件</view>
      <view class="vw-cells">
        <view class="vw-cell" @click="goto('form/index')">
          <view class="vw-cell_bd">
            <p>表单</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
        <view class="vw-cell" @click="goto('button/index')">
          <view class="vw-cell_bd">
            <p>按钮</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
        <view class="vw-cell" @click="goto('upload/index')">
          <view class="vw-cell_bd">
            <p>上传控件</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
      </view>
      <view class="vw-cells_title">展示组件</view>
      <view class="vw-cells">
        <view class="vw-cell" @click="goto('list/index')">
          <view class="vw-cell_bd">
            <p>列表</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
        <view class="vw-cell" @click="goto('tags/index')">
          <view class="vw-cell_bd">
            <p>标签</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
        <view class="vw-cell" @click="goto('icons/index')">
          <view class="vw-cell_bd">
            <p>图标</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
        <view class="vw-cell" @click="goto('skeleton/index')">
          <view class="vw-cell_bd">
            <p>骨架屏</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
      </view>
      <view class="vw-cells_title">反馈组件</view>
      <view class="vw-cells">
        <view class="vw-cell" @click="goto('pull-refresh/index')">
          <view class="vw-cell_bd">
            <p>下拉刷新&加载更多</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
        <view class="vw-cell" @click="goto('dialog/index')">
          <view class="vw-cell_bd">
            <p>弹出框</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
        <view class="vw-cell" @click="goto('collapse/index')">
          <view class="vw-cell_bd">
            <p>折叠面板</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
        <view class="vw-cell" @click="goto('empty/index')">
          <view class="vw-cell_bd">
            <p>空状态</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
      </view>
      <view class="vw-cells_title">导航组件</view>
      <view class="vw-cells">
        <view class="vw-cell" @click="goto('tabs/index')">
          <view class="vw-cell_bd">
            <p>选项卡</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
      </view>
      <view class="vw-cells_title">业务组件</view>
      <view class="vw-cells">
        <view class="vw-cell" @click="goto('cascade/index')">
          <view class="vw-cell_bd">
            <p>级联选择器</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
        <view class="vw-cell" @click="goto('address/index')">
          <view class="vw-cell_bd">
            <p>地址列表</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
        <view class="vw-cell" @click="goto('address/edit')">
          <view class="vw-cell_bd">
            <p>地址编辑</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
        <view class="vw-cell" @click="goto('coupon/index')">
          <view class="vw-cell_bd">
            <p>优惠券</p>
          </view>
          <view class="vw-cell_ft">
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
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
    goto(path) {
      let url = "/pages/" + path;
      uni.navigateTo({
        url: url,
      });
    },
  },
};
</script>

<style>
</style>
