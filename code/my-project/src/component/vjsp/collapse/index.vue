<template>
  <view class="vw-collapse" :style="{backgroundColor:bgColor}">
    <view class="vw-collapse-header" :style="{backgroundColor:hdBgColor}" @tap.stop="handleClick">
      <view class="vw-collapse-header_inner" :class="{'vw-opacity':disabled}">
        <slot name="title"></slot>
        <vw-icon name="arrowdown" size="20" class="vw-collapse-icon-arrow" :class="{'vw-collapse-icon-active':isOpen}" :style="{color:arrowColor}" v-if="arrow"></vw-icon>
      </view>
    </view>
    <view class="vw-collapse-body" :style="{backgroundColor:bdBgColor,height:isOpen?height:'0rpx'}">
      <view class="vw-collapse-body_inner" :class="{'vw-collapse-transform':height=='auto','vw-collapse-body_inner_show':isOpen && height=='auto'}">
        <slot name="content"></slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "VwCollapse",
  props: {
    //collapse背景颜色
    bgColor: {
      type: String,
      default: "transparent",
    },
    //collapse-head 背景颜色
    hdBgColor: {
      type: String,
      default: "#fff",
    },
    //collapse-body 背景颜色
    bdBgColor: {
      type: String,
      default: "transparent",
    },
    //collapse-body实际高度 open时使用
    height: {
      type: String,
      default: "auto",
    },
    //索引
    index: {
      type: Number,
      default: 0,
    },
    //当前索引，index==current时展开
    current: {
      type: Number,
      default: -1,
    },
    // 是否禁用
    disabled: {
      type: [Boolean, String],
      default: false,
    },
    //是否带箭头
    arrow: {
      type: [Boolean, String],
      default: true,
    },
    //箭头颜色
    arrowColor: {
      type: String,
      default: "#333",
    },
  },
  watch: {
    current() {
      this.updateCurrentChange();
    },
  },
  created() {
    this.updateCurrentChange();
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    updateCurrentChange() {
      this.isOpen = this.index == this.current;
    },
    handleClick() {
      if (this.disabled) return;
      this.$emit("click", {
        index: Number(this.index),
      });
    },
  },
};
</script>

<style scoped>
.vw-collapse-icon-arrow {
  font-size: 32rpx;
  transform: rotate(0);
  transform-origin: center center;
  transition: all 0.3s;
  position: absolute;
  top: 50%;
  margin-top: -8px;
  right: 30rpx;
}

.vw-arrow-padding {
  padding-right: 62rpx;
  box-sizing: border-box;
}

.vw-collapse-icon-active {
  transform: rotate(180deg);
  transform-origin: center center;
}

.vw-collapse-header {
  position: relative;
  z-index: 2;
}
.vw-collapse-body {
  transition: all 0.25s;
  overflow: hidden;
}
.vw-collapse-body_inner {
  transition: all 0.25s;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.vw-collapse-transform {
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateY(-40%);
  transform: translateY(-40%);
}

.vw-collapse-body_inner_show {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.vw-opacity {
  opacity: 0.6;
}
</style>
