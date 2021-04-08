<template>
  <view class="vw-skeleton-cmomon vw-skeleton-box" :style="{width: winWidth+'px', height:winHeight+'px', backgroundColor:backgroundColor}">
    <view class="vw-skeleton-cmomon" v-for="(item,index) in skeletonElements" :key="index" :style="{width: item.width+'px', height:item.height+'px', left: item.left+'px', top: item.top+'px',backgroundColor: skeletonBgColor,borderRadius:getRadius(item.skeletonType,borderRadius)}"></view>
  </view>
</template>

<script>
export default {
  name: "VwSkeleton",
  props: {
    //选择器(外层容器)
    selector: {
      type: String,
      default: "vw-skeleton",
    },
    //外层容器背景颜色
    backgroundColor: {
      type: String,
      default: "#fff",
    },
    //骨架元素背景颜色
    skeletonBgColor: {
      type: String,
      default: "#e9e9e9",
    },
    //骨架元素类型：矩形，圆形，带圆角矩形["rect","circular","fillet"]
    //默认所有，根据页面情况进行传值
    //页面对应元素class为：vw-skeleton-rect，vw-skeleton-circular，vw-skeleton-fillet
    //如果传入的值不在下列数组中，则为自定义class值，默认按矩形渲染
    skeletonType: {
      type: Array,
      default() {
        return ["rect", "circular", "fillet"];
      },
    },
    //圆角值，skeletonType=fillet时生效
    borderRadius: {
      type: String,
      default: "16rpx",
    },
    //骨架屏预生成数据：提前生成好的数据，当传入该属性值时，则不会再次查找子节点信息
    preloadData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {
    const res = uni.getSystemInfoSync();
    this.winWidth = res.windowWidth;
    this.winHeight = res.windowHeight;
    //如果有预生成数据，则直接使用
    this.isPreload(true);
  },
  mounted() {
    this.$nextTick(() => {
      this.nodesRef(`.${this.selector}`).then((res) => {
        if (res && res[0]) {
          this.winHeight = res[0].height + Math.abs(res[0].top);
        }
      });
      !this.isPreload() && this.selectorQuery();
    });
  },
  data() {
    return {
      winWidth: 375,
      winHeight: 800,
      skeletonElements: [],
    };
  },
  methods: {
    getRadius: function (type, val) {
      let radius = "0";
      if (type == "circular") {
        radius = "50%";
      } else if (type == "fillet") {
        radius = val;
      }
      return radius;
    },
    isPreload(init) {
      let preloadData = this.preloadData || [];
      if (preloadData.length) {
        init && (this.skeletonElements = preloadData);
        return true;
      }
      return false;
    },
    async selectorQuery() {
      let skeletonType = this.skeletonType || [];
      let nodes = [];
      for (let item of skeletonType) {
        let className = "";
        // #ifndef MP-WEIXIN
        className = `.${item}`;
        if (~"rect_circular_fillet".indexOf(item)) {
          className = `.${this.selector}-${item}`;
        }
        // #endif

        // #ifdef MP-WEIXIN
        className = `.${this.selector} >>> .${item}`;
        if (~"rect_circular_fillet".indexOf(item)) {
          className = `.${this.selector} >>> .${this.selector}-${item}`;
        }
        // #endif
        await this.nodesRef(className).then((res) => {
          res.map((d) => {
            d.skeletonType = item;
          });
          nodes = nodes.concat(res);
        });
      }
      this.skeletonElements = nodes;
    },
    async nodesRef(className) {
      return await new Promise((resolve, reject) => {
        uni
          .createSelectorQuery()
          .selectAll(className)
          .boundingClientRect((res) => {
            if (res) {
              resolve(res);
            } else {
              reject(res);
            }
          })
          .exec();
      });
    },
  },
};
</script>

<style scoped>
.vw-skeleton-cmomon {
  position: absolute;
  z-index: 99999;
}

.vw-skeleton-box {
  left: 0;
  top: 0;
}
</style>
