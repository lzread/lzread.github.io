<template>

  <view v-if="visible">
      <view class="vw_overlay"></view>
      <view role="alert" class="vw-dialog">
        <view class="vw-dialog_hd">{{title}}</view>
        <view class="vw-dialog_bd">
          <view v-html="message" class="vw-dialog_content"></view>
        </view>
        <view class="vw-dialog_ft">
          <view class="vw-dialog_ft_button" @click="close">{{buttonText}}</view>
        </view>
      </view>
  </view>

</template>

<script type="text/babel">
export default {
  data() {
    return {
      title: "提示",
      message: "",
      buttonText: "确定",
      visible: true,
      callback: () => {},
    };
  },

  computed: {},

  watch: {},

  methods: {
    close() {
      this.visible = false;
      this.callback();
    },
  },
};
</script>
