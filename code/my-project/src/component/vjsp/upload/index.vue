<template>
  <view>
    <view data-role="images" class="vw-upload">
      <view class="vw-upload_item" :style="{width:width+'rpx',height:height+'rpx'}" v-for="(item,index) in imageList" :key="index">
        <image :src="item" class="vw-upload_item_img" :style="{width:width+'rpx',height:height+'rpx'}" @tap.stop="previewImage(index)" mode="aspectFill"></image>
        <view v-if="!forbidDel" class="vw-upload_item_img_del" @tap.stop="delImage(index)"></view>
        <view v-if="statusArr[index]!=1" class="vw-overlay">
          <view class="vw-upload_loading" v-if="statusArr[index]==2"></view>
          <text class="vw-upload_tips">{{statusArr[index]==2?'上传中...':'上传失败'}}</text>
          <view class="vw-upload_mask_btn" v-if="statusArr[index]==3" @tap.stop="reUpLoad(index)" hover-class="vw-upload_btn_hover" :hover-stay-time="150">重新上传</view>
        </view>
      </view>
      <view v-if="isShowAdd" class="vw-upload_add" :style="{width:width+'rpx',height:height+'rpx'}" @tap="chooseImage">
        <vw-icon name="plus" size="30"></vw-icon>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "VwUpload",
  props: {
    //展示图片宽度
    width: {
      type: [Number, String],
      default: 140,
    },
    //展示图片高度
    height: {
      type: [Number, String],
      default: 140,
    },
    //初始化图片路径
    value: {
      type: Array,
      default() {
        return [];
      },
    },
    //禁用删除
    forbidDel: {
      type: Boolean,
      default: false,
    },
    //禁用添加
    forbidAdd: {
      type: Boolean,
      default: false,
    },
    //服务器接口地址。当接口地址为空时，直接返回本地图片地址
    serverUrl: {
      type: String,
      default: "",
    },
    //限制数
    limit: {
      type: Number,
      default: 9,
    },
    //original 原图，compressed 压缩图，默认二者都有
    sizeType: {
      type: Array,
      default() {
        return ["original", "compressed"];
      },
    },
    //album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项
    sourceType: {
      type: Array,
      default() {
        return ["album", "camera"];
      },
    },
    //可上传图片类型，默认为空，不限制  Array<String> ['jpg','png','gif']
    imageFormat: {
      type: Array,
      default() {
        return [];
      },
    },
    //单张图片大小限制 MB
    size: {
      type: Number,
      default: 4,
    },
    //文件对应的key，默认为 file
    fileKeyName: {
      type: String,
      default: "file",
    },
    //HTTP 请求 Header, header 中不能设置 Referer。
    header: {
      type: Object,
      default() {
        return {};
      },
    },
    //HTTP 请求中其他额外的 form data
    formData: {
      type: Object,
      default() {
        return {};
      },
    },
    //自定义参数
    params: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    return {
      //图片地址
      imageList: [],
      //上传状态：1-上传成功 2-上传中 3-上传失败
      statusArr: [],
    };
  },
  created() {
    this.initImages();
  },
  watch: {
    value(val) {
      if (val) {
        this.initImages();
      }
    },
  },
  computed: {
    isShowAdd() {
      let isShow = true;
      if (
        this.forbidAdd ||
        (this.limit && this.imageList.length >= this.limit)
      ) {
        isShow = false;
      }
      return isShow;
    },
  },
  methods: {
    initImages() {
      this.imageList = [...this.value];
      for (let item of this.imageList) {
        this.statusArr.push("1");
      }
    },
    // 重新上传
    reUpLoad(index) {
      this.$set(this.statusArr, index, "2");
      this.change();
      this.uploadImage(index, this.imageList[index])
        .then(() => {
          this.change();
        })
        .catch(() => {
          this.change();
        });
    },
    /**
     * @param manual 是否手动上传
     **/
    change(manual = false) {
      let status = ~this.statusArr.indexOf("2") ? 2 : 1;
      if (status != 2 && ~this.statusArr.indexOf("3")) {
        // 上传失败
        status = 3;
      }
      this.$emit("complete", {
        status: status,
        imgArr: this.imageList,
        params: this.params,
        manual: manual,
      });
    },
    toast(text) {
      text &&
        uni.showToast({
          title: text,
          icon: "none",
        });
    },
    chooseImage: function () {
      let _this = this;
      uni.chooseImage({
        count: _this.limit - _this.imageList.length,
        sizeType: _this.sizeType,
        sourceType: _this.sourceType,
        success: function (e) {
          let imageArr = [];
          for (let i = 0; i < e.tempFiles.length; i++) {
            let len = _this.imageList.length;
            if (len >= _this.limit) {
              _this.toast(`最多可上传${_this.limit}张图片`);
              break;
            }
            //过滤图片类型
            let path = e.tempFiles[i].path;

            if (_this.imageFormat.length > 0) {
              let format = "";
              // #ifdef H5
              let type = e.tempFiles[i].type;
              format = type.split("/")[1];
              // #endif

              // #ifndef H5
              format = path.split(".")[path.split(".").length - 1];
              // #endif

              if (_this.imageFormat.indexOf(format) == -1) {
                let text = `只能上传 ${_this.imageFormat.join(",")} 格式图片！`;
                _this.toast(text);
                continue;
              }
            }

            //过滤超出大小限制图片
            let size = e.tempFiles[i].size;

            if (_this.size * 1024 * 1024 < size) {
              let err = `单张图片大小不能超过：${_this.size}MB`;
              _this.toast(err);
              continue;
            }
            imageArr.push(path);
            _this.imageList.push(path);
            _this.statusArr.push("2");
          }
          _this.change();

          let start = _this.imageList.length - imageArr.length;
          for (let j = 0; j < imageArr.length; j++) {
            let index = start + j;
            //服务器地址
            if (_this.serverUrl) {
              _this
                .uploadImage(index, imageArr[j])
                .then(() => {
                  _this.change();
                })
                .catch(() => {
                  _this.change();
                });
            } else {
              //无服务器地址则直接返回成功
              _this.$set(_this.statusArr, index, "1");
              _this.change();
            }
          }
        },
      });
    },
    uploadImage: function (index, url, serverUrl) {
      let _this = this;
      return new Promise((resolve, reject) => {
        uni.uploadFile({
          url: this.serverUrl || serverUrl,
          name: this.fileKeyName,
          header: this.header,
          formData: this.formData,
          filePath: url,
          success: function (res) {
            if (res.statusCode == 200) {
              //返回结果 此处需要按接口实际返回进行修改
              let d = JSON.parse(res.data.replace(/\ufeff/g, "") || "{}");
              //判断code，以实际接口规范判断
              if (d.code % 100 === 0) {
                // 上传成功 d.url 为上传后图片地址，以实际接口返回为准
                d.url && (_this.imageList[index] = d.url);
                _this.$set(_this.statusArr, index, d.url ? "1" : "3");
              } else {
                // 上传失败
                _this.$set(_this.statusArr, index, "3");
              }
              resolve(index);
            } else {
              _this.$set(_this.statusArr, index, "3");
              reject(index);
            }
          },
          fail: function (res) {
            _this.$set(_this.statusArr, index, "3");
            reject(index);
          },
        });
      });
    },
    delImage: function (index) {
      this.imageList.splice(index, 1);
      this.statusArr.splice(index, 1);
      this.$emit("remove", {
        index: index,
        params: this.params,
      });
      this.change();
    },
    previewImage: function (index) {
      if (!this.imageList.length) return;
      uni.previewImage({
        current: this.imageList[index],
        loop: true,
        urls: this.imageList,
      });
    },
    /**
     * 当属性serverUrl传空时，父级调用该方法一次性上传所有图片
     * @param serverUrl 服务器接口地址
     **/
    uploadAllImage(serverUrl) {
      if (!serverUrl) {
        this.toast("服务器接口地址不能为空！");
        return;
      }
      let imageArr = [...this.imageList];
      const len = imageArr.length;
      for (let i = 0; i < len; i++) {
        //如果是服务器地址图片则无需再次上传
        if (imageArr[i].startsWith("http")) {
          continue;
        } else {
          this.$set(this.statusArr, i, "2");
          this.uploadImage(i, imageArr[i], serverUrl)
            .then(() => {
              if (i === len - 1) {
                this.change(true);
              }
            })
            .catch(() => {
              if (i === len - 1) {
                this.change(true);
              }
            });
        }
      }
    },
  },
};
</script>

