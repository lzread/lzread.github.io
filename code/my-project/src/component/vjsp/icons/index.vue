<template>
  <text class="vw-icon-class vw-icon" :class="'vw-icon-' + name" :style="{ color: color || '#999', fontSize: size + unit, fontWeight: bold ? 'bold' : 'normal',margin:margin }" @tap="handleClick"></text>

</template>

<script>
export default {
  name: "VwIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
    size: {
      type: [Number, String],
      default: 32,
    },
    //px或者rpx
    unit: {
      type: String,
      default: "px",
    },
    color: {
      type: String,
      default: "#999",
    },
    bold: {
      type: Boolean,
      default: false,
    },
    margin: {
      type: String,
      default: "0",
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click", {
        index: this.index,
      });
    },
  },
};
</script>

