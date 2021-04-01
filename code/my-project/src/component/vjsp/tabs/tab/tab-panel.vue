<template>
  <view class="vw-tab-panel" v-if="active" v-show="active" role="tabpanel" :aria-hidden="!active" :id="`panel-${paneName}`" :aria-labelledby="`tab-${paneName}`">
    <slot></slot>
  </view>
</template>
<script>
export default {
  name: "VwTabPanel",

  componentName: "VwTabPanel",

  props: {
    label: String,
    labelContent: Function,
    name: String,
    disabled: Boolean,
  },

  data() {
    return {
      index: null,
      loaded: false,
    };
  },

  computed: {
    active() {
      const active = this.$parent.currentName === (this.name || this.index);
      if (active) {
        this.loaded = true;
      }
      return active;
    },
    paneName() {
      return this.name || this.index;
    },
  },

  updated() {
    this.$parent.$emit("tab-nav-update");
  },
};
</script>
