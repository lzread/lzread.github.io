<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <vw-tabs v-model="defaultValue1">
        <vw-tab-panel label="选项1" name="one1">内容1</vw-tab-panel>
        <vw-tab-panel label="选项2" name="two1">内容2</vw-tab-panel>
        <vw-tab-panel label="选项3" name="three1">内容3</vw-tab-panel>
      </vw-tabs>

      <vw-tabs v-model="defaultValue2">
        <vw-tab-panel label="选项1" name="one2">内容1</vw-tab-panel>
        <vw-tab-panel label="选项2" name="two2">内容2</vw-tab-panel>
        <vw-tab-panel label="选项3" name="three2">内容3</vw-tab-panel>
      </vw-tabs>
    </view>
  </view>
</template>

<script>

export default {
  data() {
    return {
      defaultValue1: "one1",
      defaultValue2: "two2",
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.vw-tab-panel{height: 300rpx; padding: 20rpx;}
</style>
