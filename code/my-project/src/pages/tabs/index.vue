<template>
  <view class="container">
    <vw-tabs :top="0" :tabs="tabs3" :currentTab="currentTab" @change="change" bottom="50%" :backgroundColor="backgroundColor" color="#fff" selectedColor="#EB0909" :sliderWidth="146" :sliderHeight="52" sliderBgColor="#fff" :unlined="true">

      

    </vw-tabs>
    <vw-tabs :tabs="navbar" :currentTab="currentTab>1?0:currentTab" @change="change" itemWidth="50%"></vw-tabs>
    <view class="vw-mtop">
      <vw-tabs :tabs="tabs" :currentTab="currentTab>2?0:currentTab" @change="change" itemWidth="33.3333%"></vw-tabs>
    </view>
    <view class="vw-mtop">
      <vw-tabs :tabs="tabs2" :currentTab="currentTab" selectedColor="#EB0909" sliderBgColor="#EB0909" @change="change"></vw-tabs>
    </view>
    <view class="vw-mtop">
      <vw-tabs :tabs="tabs2" :height="88" :currentTab="currentTab" :sliderWidth="150" :sliderHeight="60" bottom="50%" color="#888" selectedColor="#11CDFC" :bold="true" sliderBgColor="#E5FAFF" @change="change"></vw-tabs>
    </view>
    <view class="vw-mtop">
      <vw-tabs :tabs="navbar" backgroundColor="#fafafa" :height="88" :currentTab="currentTab>1?0:currentTab" :sliderWidth="150" :sliderHeight="60" bottom="50%" color="#888" selectedColor="#11CDFC" :bold="true" sliderBgColor="#E5FAFF" @change="change" itemWidth="50%" :width="200" unlined></vw-tabs>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 0,
      backgroundColor:
        "linear-gradient(90deg, rgb(255, 118, 38), rgb(252, 30, 82))",
      navbar: [
        {
          name: "正在疯抢",
        },
        {
          name: "即将开始",
        },
      ],
      tabs: [
        {
          name: "正在疯抢",
        },
        {
          name: "即将开始",
        },
        {
          name: "明日预告",
        },
      ],
      tabs2: [
        {
          name: "今日特拼",
        },
        {
          name: "全部",
        },
        {
          name: "新品",
        },
        {
          name: "禁用状态",
          disabled: true,
        },
      ],
      tabs3: [
        {
          name: "今日特拼",
        },
        {
          name: "全部",
        },
        {
          name: "新品",
        },
        {
          name: "品牌",
        },
      ],
    };
  },
  methods: {
    change(e) {
      this.currentTab = e.index;
    },
  },
};
</script>

<style>
.container {
  padding: 0 0 120rpx 0;
  box-sizing: border-box;
}

.title {
  font-size: 34rpx;
  color: #333;
  font-weight: 500;
}

.sub-title {
  font-size: 24rpx;
  color: #7a7a7a;
  padding-top: 18rpx;
}

.vw-primary {
  color: #5677fc;
}

.vw-mtop {
  margin-top: 80rpx;
}
</style>
