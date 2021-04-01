<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="vw-cells">
        <navigator class="vw-cell" v-for="(item,index) in data" :key="index">
          <view class="vw-cell_bd">
            <p>{{item.title}}</p>
          </view>
          <view class="vw-cell_ft">{{item.release_time}}</view>
        </navigator>
      </view>
      <view class="vm-load-more" v-if="showLoadMore" v-html="loadMoreText"></view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      loadMoreText: '<span class="vm-load-more_text">正在加载</span>',
      showLoadMore: false,
      listQuery: {
        page: 1,
        limit: 20,
        keyword: "",
      },
      total: 0,
    };
  },
  onLoad() {
    this.initData();
  },
  onReachBottom() {
    if (this.data.length >= this.total) {
      this.showLoadMore = true;
      this.loadMoreText = '<span class="vm-load-more_text">数据加载完成</span>';
      return;
    }
    this.showLoadMore = true;
    this.listQuery.page += 1;
    setTimeout(() => {
      this.initData("up");
    }, 1000);
  },
  onPullDownRefresh() {
    this.listQuery.page = 1;
    setTimeout(() => {
      this.initData("down");
    }, 1000);
  },
  methods: {
    initData(dir) {
      uni.request({
        url: "http://api.lzread.com:3111/api/notice/list",
        data: this.listQuery,
        success: (res) => {
          this.total = res.data.total;
          if (dir == "down") {
            this.data = res.data.data;
            uni.stopPullDownRefresh();
          } else {
            this.data = this.data.concat(res.data.data);
          }
        },
      });
    },
  },
};
</script>

<style>
.text {
  margin: 16rpx 0;
  width: 100%;
  background-color: #fff;
  height: 120rpx;
  line-height: 120rpx;
  text-align: center;
  color: #555;
  border-radius: 8rpx;
}
</style>
