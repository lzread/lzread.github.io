<template>
  <button class="vw-btn" :class="[
			plain ? 'vw-' + type + '-outline' : 'vw-btn-' + (type || 'primary'),
			getDisabledClass(disabled, type, plain),
			getShapeClass(shape, plain),
			getShadowClass(type, shadow, plain),
			bold ? 'vw-btn_text_bold' : '',
			link ? 'vw-btn_link' : ''
		]" :style="{ width: width, height: height, lineHeight: height, fontSize: size + 'rpx', margin: margin }" :loading="loading" :form-type="formType" :open-type="openType" @getuserinfo="bindgetuserinfo" @getphonenumber="bindgetphonenumber" @contact="bindcontact" @error="binderror" :disabled="disabled" @tap="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VwButton",
  // #ifndef MP-QQ
  behaviors: ["wx://form-field-button"],
  // #endif
  props: {
    //样式类型 primary, white, danger, warning, green,blue, gray，black,brown,gray-primary,gray-danger,gray-warning,gray-green
    type: {
      type: String,
      default: "primary",
    },
    //是否加阴影
    shadow: {
      type: Boolean,
      default: false,
    },
    // 宽度 rpx或 %
    width: {
      type: String,
      default: "100%",
    },
    //高度 rpx
    height: {
      type: String,
      default: "96rpx",
    },
    //字体大小 rpx
    size: {
      type: Number,
      default: 32,
    },
    bold: {
      type: Boolean,
      default: false,
    },
    margin: {
      type: String,
      default: "0",
    },
    //形状 circle(圆角), square(默认方形)，rightAngle(平角)
    shape: {
      type: String,
      default: "square",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    //link样式，去掉边框，结合plain一起使用
    link: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    //禁用后背景是否为灰色 （非空心button生效）
    disabledGray: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    formType: {
      type: String,
      default: "",
    },
    openType: {
      type: String,
      default: "",
    },
    index: {
      type: [Number, String],
      default: 0,
    },
    //是否需要阻止重复点击【默认200ms】
    preventClick: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      time: 0,
    };
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      if (this.preventClick) {
        if (new Date().getTime() - this.time <= 200) return;
        this.time = new Date().getTime();
        setTimeout(() => {
          this.time = 0;
        }, 200);
      }
      this.$emit("click", {
        index: Number(this.index),
      });
    },
    bindgetuserinfo({ detail = {} } = {}) {
      this.$emit("getuserinfo", detail);
    },
    bindcontact({ detail = {} } = {}) {
      this.$emit("contact", detail);
    },
    bindgetphonenumber({ detail = {} } = {}) {
      this.$emit("getphonenumber", detail);
    },
    binderror({ detail = {} } = {}) {
      this.$emit("error", detail);
    },
    getShadowClass: function (type, shadow, plain) {
      let className = "";
      if (shadow && type != "white" && !plain) {
        className = "vw-shadow-" + type;
      }
      return className;
    },
    getDisabledClass: function (disabled, type, plain) {
      let className = "";
      if (disabled && type != "white" && type.indexOf("-") == -1) {
        let classVal = this.disabledGray
          ? "vw-gray-disabled"
          : "vw-dark-disabled";
        className = plain ? "vw-dark-disabled-outline" : classVal;
      }
      return className;
    },
    getShapeClass: function (shape, plain) {
      let className = "";
      if (shape == "circle") {
        className = plain ? "vw-outline-fillet" : "vw-fillet";
      } else if (shape == "rightAngle") {
        className = plain ? "vw-outline-rightAngle" : "vw-rightAngle";
      }
      return className;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
