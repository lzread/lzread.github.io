<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">

      <vw-tabs v-model="tabs">
        <vw-tab-panel label="通用" name="tab1">

          <vw-empty type="error" description="描述文字"></vw-empty>

        </vw-tab-panel>
        <vw-tab-panel label="搜索" name="tab2">

          <vw-empty type="search" description="描述文字"></vw-empty>

        </vw-tab-panel>
        <vw-tab-panel label="默认" name="tab3">

          <vw-empty type="default" description="描述文字"></vw-empty>

        </vw-tab-panel>

        <vw-tab-panel label="自定义" name="tab4">

          <vw-empty type="default" description="描述文字">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi vel quia quisquam est distinctio placeat enim? Ullam sapiente, saepe, suscipit, ipsam tempora magnam inventore possimus aliquam error tempore voluptate? Incidunt.</p>
          </vw-empty>

        </vw-tab-panel>

        <vw-tab-panel label="按钮" name="tab5">
          <vw-empty type="default" description="描述文字">
            <vw-button width="180rpx" height="80rpx" margin="20rpx" :size="28" type="gradual" shadow>返回首页</vw-button>
          </vw-empty>
        </vw-tab-panel>
      </vw-tabs>

    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabs: "tab1",
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
