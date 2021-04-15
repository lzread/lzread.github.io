<template>
  <view class="vw-rate" @touchmove="touchMove">
    <block v-for="(item, index) in quantity" :key="index">
      <view class="vw-rate_icon" :class="['vw-rate_icon-collection' + (hollow && (current <= index || (disabled && current <= index + 1)) ? '' : '-fill')]" :data-index="index" @tap="handleTap" :style="{ fontSize: size + 'px', color: current > index + 1 || (!disabled && current > index) ? active : normal }">
        <view class="vw-rate_icon vw-rate_icon-main vw-rate_icon-collection-fill" v-if="disabled && current == index + 1" :style="{ fontSize: size + 'px', color: active, width: percent + '%' }"></view>
      </view>
    </block>
  </view>
</template>

<script>
export default {
  name: "VwRate",
  props: {
    //数量
    quantity: {
      type: Number,
      default: 5,
    },
    //当前选中
    current: {
      type: Number,
      default: 0,
    },
    //当前选中星星分数(大于0，小于等于1的数)
    score: {
      type: [Number, String],
      default: 1,
    },
    //禁用点击
    disabled: {
      type: Boolean,
      default: false,
    },
    //大小
    size: {
      type: Number,
      default: 20,
    },
    //未选中颜色
    normal: {
      type: String,
      default: "#b2b2b2",
    },
    //选中颜色
    active: {
      type: String,
      default: "#e41f19",
    },
    //未选中是否为空心
    hollow: {
      type: Boolean,
      default: false,
    },
    //自定义参数
    params: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    return {
      pageX: 0,
      percent: 0,
    };
  },
  created() {
    this.percent = Number(this.score || 0) * 100;
  },
  watch: {
    score(newVal, oldVal) {
      this.percent = Number(newVal || 0) * 100;
    },
  },
  methods: {
    handleTap(e) {
      if (this.disabled) {
        return;
      }
      const index = e.currentTarget.dataset.index;
      this.$emit("change", {
        index: Number(index) + 1,
        params: this.params,
      });
    },
    touchMove(e) {
      if (this.disabled) {
        return;
      }
      if (!e.changedTouches[0]) {
        return;
      }
      const movePageX = e.changedTouches[0].pageX;
      const distance = movePageX - this.pageX;

      if (distance <= 0) {
        return;
      }
      let index = Math.ceil(distance / this.size);
      index = index > this.quantity ? this.quantity : index;
      this.$emit("change", {
        index: index,
        params: this.params,
      });
    },
  },
  mounted() {
    const className = ".vw-rate";
    let query = uni.createSelectorQuery().in(this);
    query
      .select(className)
      .boundingClientRect((res) => {
        this.pageX = res.left || 0;
      })
      .exec();
  },
};
</script>


