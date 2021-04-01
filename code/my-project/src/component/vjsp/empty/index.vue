<script>
export default {
  name: "VwEmpty",

  props: {
    image: String,
    imageSize: String,
    description: String,
    type: String,
  },

  data() {
    return {};
  },

  methods: {},

  render(h) {
    const img = this.image ? (
      <view class="vw-empty_img">
        <img src={`${this.image}`} />
      </view>
    ) : (
      ""
    );
    const type = this.type ? (
      <view class={`vw-empty_icon ${this.type}`}></view>
    ) : (
      ""
    );
    const desc = this.description ? (
      <view class="vw-empty_desc">{this.description}</view>
    ) : (
      ""
    );
    return <view class="vw-empty">{[type, img, desc, this.$slots.default]}</view>;
  },

  created() {},

  mounted() {},

  updated() {},
};
</script>
