<script>
function noop() {}

export default {
  name: "TabNav",

  props: {
    panes: Array,
    currentName: String,
    onTabClick: {
      type: Function,
      default: noop,
    },
  },

  data() {
    return {};
  },

  computed: {},

  methods: {},

  render(h) {
    const { panes, onTabClick } = this;

    const tabs = this._l(panes, (pane, index) => {
      let tabName = pane.name || pane.index || index;

      pane.index = `${index}`;

      const tabLabelContent = pane.$slots.label || pane.label;
      const tabindex = pane.active ? 0 : -1;
      return (
        <view
          class={{
            "vw-tabs_item": true,
            "is-active": pane.active,
            "is-disabled": pane.disabled,
          }}
          id={`tab-${tabName}`}
          key={`tab-${tabName}`}
          aria-controls={`pane-${tabName}`}
          role="tab"
          aria-selected={pane.active}
          ref="tabs"
          tabindex={tabindex}
          on-click={(ev) => {
            onTabClick(pane, tabName, ev);
          }}
        >
          {tabLabelContent}
        </view>
      );
    });

    return (
      <view class="vw-tabs_nav">
          {tabs}
      </view>
    );
  },

  mounted() {},

  beforeDestroy() {},
};
</script>
