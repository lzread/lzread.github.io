<template>

  <view v-if="visible">
    <view class="vw_overlay"></view>
    <view role="confirm" class="vw-dialog">
      <view class="vw-dialog_hd">{{title}}</view>
      <view class="vw-dialog_bd">
        <view v-html="message" class="vw-dialog_content"></view>
      </view>
      <view class="vw-dialog_ft">
        <view class="vw-dialog_ft_button" @click="cancel">{{buttonCancelText}}</view>
        <view class="vw-dialog_ft_button" @click="submit">{{buttonSubmitText}}</view>
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
      buttonCancelText: "取消",
      buttonSubmitText: "确定",
      visible: true,
      submitCallback: () => {},
      cancelCallback: () => {},
    };
  },

  computed: {},

  watch: {},

  methods: {
    submit() {
      this.visible = false;
      this.submitCallback();
    },
    cancel() {
      this.visible = false;
      this.cancelCallback();
    },
  },
};
</script>
