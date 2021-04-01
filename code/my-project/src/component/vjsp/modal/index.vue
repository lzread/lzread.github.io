<template>

  <view v-if="visible">
    <view class="vw_overlay" @click="close"></view>
    <view role="modal" :class="`vw-modal vw-modal-${position}`">
      <slot></slot>
    </view>
  </view>

</template>

<script>
export default {
  name: "VwModal",
  props: {
    visible: Boolean,
    position: String,
  },
  data() {
    return {};
  },
  watch: {
    visible(value) {
      this.setVisible(value);
    },
  },

  methods: {
    setVisible(value) {
      this.visible = value;
    },
    close() {
      this.$emit("overlayClose");
    },
  },
};
</script>
