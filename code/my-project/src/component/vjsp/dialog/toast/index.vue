<template>

  <view v-if="visible">
    <view role="toast" class="vw-toast">
      <view v-html="message" class="vw-toast_content"></view>
    </view>
  </view>

</template>

<script type="text/babel">
export default {
  data() {
    return {
      message: "",
      visible: true,
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