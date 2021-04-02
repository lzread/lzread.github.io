<template>

  <view class="vw-empty">
    <view class="vw-empty_img" v-if="image">
      <img :src="image" />
    </view>
    <view :class="'vw-empty_icon '+type"></view>
    <view class="vw-empty_desc">{{description}}</view>
    <slot></slot>
  </view>

</template>

<script>
export default {
  name: "VwEmpty",

  props: {
    image: String,
    imageSize: String,
    description: String,
    type: String,
  },
};
</script>
