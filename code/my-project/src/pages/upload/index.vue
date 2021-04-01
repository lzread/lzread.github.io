<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <form @submit="formSubmit" @reset="formReset" class="vw-form">
        <view class="vw-cells_title">单图上传</view>
        <view class="vw-cells">
          <view class="vw-cell vw-cell-upload">
            <view class="vw-cell_bd">
              <vw-upload :limit="1" :value="value" :serverUrl="serverUrl" @complete="result" @remove="remove"></vw-upload>
            </view>
          </view>
        </view>

        <view class="vw-cells_title">多图上传(最多 9 张图)</view>
        <view class="vw-cells">
          <view class="vw-cell vw-cell-upload">
            <view class="vw-cell_bd">
              <vw-upload :value="value" :serverUrl="serverUrl" @complete="result" @remove="remove"></vw-upload>
            </view>
          </view>
        </view>

      </form>

    </view>
  </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      imageData: [],
      //上传地址
      serverUrl: "",
      value: [], //初始化图片
    };
  },
  onLoad() {},
  methods: {
    result: function (e) {
      console.log(e);
      this.imageData = e.imgArr;
    },
    remove: function (e) {
      //移除图片
      console.log(e);
      let index = e.index;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
