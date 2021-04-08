<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">

      <view class="vw-cells_title">基础用法</view>
      <view class="vw-address-list">

        <radio-group @change="radioChange">
          <label v-for="(item, index) in items" :key="item.value" class="vw-address-item">
            <vw-swipe-action :actions="actions" @click="handle">
              <template v-slot:content>
                <view :class="addr_disabled == item.id ? 'vw-cell  vw-cell_disabled': 'vw-cell'">
                  <view class="vw-cell_hd">
                    <radio :value="item.id" :checked="addr_default == item.id" :disabled="addr_disabled == item.id" />
                  </view>
                  <view class="vw-cell_bd">
                    <view class="vw-address-item_name">{{item.name}}</view>
                    <view class="vw-address-item_mobile">{{item.mobile}}</view>
                    <view class="vw-address-item_default" v-if="addr_default == item.id">默认</view>
                    <view class="vw-address-item_address">{{item.address}}</view>
                  </view>
                  <view class="vw-cell_ft">

                  </view>
                </view>
              </template>
            </vw-swipe-action>
          </label>
        </radio-group>

      </view>

    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      actions: [
        {
          name: "编辑",
          color: "#fff",
          fontsize: 30, //单位rpx
          width: 70, //单位px
          background: "#faa851",
        },
        {
          name: "删除",
          color: "#fff",
          fontsize: 30, //单位rpx
          width: 70, //单位px
          background: "#ff201f",
        },
      ],
      addr_disabled: "4", //禁用
      addr_default: "1", //默认
      items: [
        {
          id: "1",
          name: "张三",
          mobile: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
        },
        {
          id: "2",
          name: "李四",
          mobile: "15000000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
        {
          id: "3",
          name: "王五",
          mobile: "18000000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
        {
          id: "4",
          name: "jack",
          mobile: "17000000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
        {
          id: "5",
          name: "ben",
          mobile: "17000000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  computed: {},
  onLoad() {},
  methods: {
    handle(e) {
      console.log(e);
    },
    edit(id) {
      uni.navigateTo({
        url: "/pages/address/edit",
      });
    },
    del(index) {
      this.$confirm({
        message: "是否删除当前地址",
        buttonCancelText: "否",
        buttonSubmitText: "是",
        submitCallback: () => {
          this.items.splice(index, 1);
        },
      });
    },
    radioChange(event) {
      console.log(event);
    },
  },
};
</script>

<style>
</style>
