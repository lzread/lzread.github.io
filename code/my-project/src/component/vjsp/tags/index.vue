<template>
  <view class="vw-tag" :hover-class="hover ? 'vw-tag-opcity' : ''" :hover-stay-time="150" :class="[originLeft ? 'vw-origin-left' : '', originRight ? 'vw-origin-right' : '', getClassName(shape, plain), getTypeClass(type, plain)]" :style="{ transform: `scale(${scaleMultiple})`, padding: padding, margin: margin, fontSize: `${size}rpx`, lineHeight: `${size}rpx` }" @tap="handleClick">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: "VwTag",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    //padding
    padding: {
      type: String,
      default: "12rpx 20rpx",
    },
    margin: {
      type: String,
      default: "0",
    },
    //文字大小 rpx
    size: {
      type: String,
      default: "28rpx",
    },
    // circle, square，circleLeft，circleRight
    shape: {
      type: String,
      default: "square",
    },
    //是否空心
    plain: {
      type: Boolean,
      default: false,
    },
    //点击效果
    hover: {
      type: Boolean,
      default: false,
    },
    //缩放倍数
    scaleMultiple: {
      type: Number,
      default: 1,
    },
    originLeft: {
      type: Boolean,
      default: false,
    },
    originRight: {
      type: Boolean,
      default: false,
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
    getTypeClass: function (type, plain) {
      return plain ? "vw-" + type + "-outline" : "vw-" + type;
    },
    getClassName: function (shape, plain) {
      //circle, square，circleLeft，circleRight
      var className = plain ? "vw-tag-outline " : "";
      if (shape != "square") {
        if (shape == "circle") {
          className =
            className + (plain ? "vw-tag-outline-fillet" : "vw-tag-fillet");
        } else if (shape == "circleLeft") {
          className = className + "vw-tag-fillet-left";
        } else if (shape == "circleRight") {
          className = className + "vw-tag-fillet-right";
        }
      }
      return className;
    },
  },
};
</script>


