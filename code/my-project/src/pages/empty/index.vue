<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">

      <vw-empty type="error" description="描述文字"></vw-empty>

      <vw-empty type="search" description="描述文字"></vw-empty>

      <vw-empty type="default" description="描述文字"></vw-empty>

      <vw-empty type="default" description="描述文字">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi vel quia quisquam est distinctio placeat enim? Ullam sapiente, saepe, suscipit, ipsam tempora magnam inventore possimus aliquam error tempore voluptate? Incidunt.</p>
      </vw-empty>

      <vw-empty type="default" description="描述文字">
        <vw-button width="180rpx" height="80rpx" margin="20rpx" :size="28" type="gradual" shadow>返回首页</vw-button>
      </vw-empty>

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
</style>
