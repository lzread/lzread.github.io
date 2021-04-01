<template>

  <view v-if="visible">
    <view class="vw_overlay"></view>
    <view role="loading" class="vw-loading">
      <view class="vw-loading_icon">

      </view>
      <view class="vw-loading_msg">
        {{title}}
      </view>
    </view>
  </view>

</template>

<script type="text/babel">
export default {
  data() {
    return {
      title: "正在加载",
      visible: false,
    };
  },

  computed: {},

  watch: {},

  methods: {},
};
</script>
