<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">

      <view class="vw-cells_title">基本用法</view>
      <view class="vw-cells">
        <view class="vw-cell" @click="select">
          <view class="vw-cell_bd">
            <p>选择优惠券</p>
          </view>
          <view class="vw-cell_ft">
            <view class="vw-cell_value">{{coupon_text}}</view>
            <vw-icon name="arrowright" size="20"></vw-icon>
          </view>
        </view>
      </view>

      <vw-modal :visible="modalVisible" position="bottom" @overlayClose="close">
        <view class="vw-coupon-list">
          <radio-group @change="radioChange">
            <label v-for="(item, index) in items" :key="item.value" class="vw-coupon-item">
              <view :class="coupon_disabled == item.id ? 'vw-cell vw-cell_disabled': 'vw-cell'">
                <view class="vw-cell_hd">
                  <view class="vw-coupon-item_money" data-unit="元">
                    {{item.money}}
                  </view>
                  <view class="vw-coupon-item_sale">
                    {{item.sale}}
                  </view>
                </view>
                <view class="vw-cell_bd">
                  <view class="vw-coupon-item_name">
                    {{item.name}}
                  </view>
                  <view class="vw-coupon-item_time">
                    {{item.date}}
                  </view>
                </view>
                <view class="vw-cell_ft">
                  <radio :value="item.id" :checked="current == item.id" :disabled="coupon_disabled == item.id" />
                </view>
              </view>
            </label>
          </radio-group>

        </view>
      </vw-modal>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      modalVisible: false,
      coupon_disabled: "4", //禁用
      current: "", //默认
      coupon_text: "",
      items: [
        {
          id: "1",
          name: "天降红包",
          sale: "满100可用",
          money: "99.99",
          date: "2017.10.1 ~ 2021.10.1",
        },
        {
          id: "2",
          name: "天降红包",
          sale: "满10可用",
          money: "9.99",
          date: "2017.10.1 ~ 2021.10.1",
        },
        {
          id: "3",
          name: "天降红包",
          sale: "满1000可用",
          money: "999.99",
          date: "2017.10.1 ~ 2021.10.1",
        },
        {
          id: "4",
          name: "天降红包",
          sale: "满10000可用",
          money: "9999.99",
          date: "2017.10.1 ~ 2021.10.1",
        },
        {
          id: "5",
          name: "天降红包",
          sale: "满100000可用",
          money: "99999.99",
          date: "2017.10.1 ~ 2021.10.1",
        },
      ],
    };
  },
  computed: {},
  onLoad() {},
  methods: {
    close() {
      this.modalVisible = false;
    },
    select() {
      this.modalVisible = true;
    },
    radioChange(evt) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id === evt.target.value) {
          this.current = this.items[i].id;
          this.coupon_text = this.items[i].money;
          break;
        }
      }
      this.modalVisible = false;
    },
  },
};
</script>



