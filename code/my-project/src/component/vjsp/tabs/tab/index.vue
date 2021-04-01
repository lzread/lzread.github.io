<script>
import TabNav from "./tab-nav";

export default {
  name: "VwTabs",

  components: {
    TabNav,
  },

  props: {
    activeName: String,
    value: {},
  },

  data() {
    return {
      currentName: this.value || this.activeName,
      panes: [],
    };
  },

  watch: {
    activeName(value) {
      this.setCurrentName(value);
    },
    value(value) {
      this.setCurrentName(value);
    },
  },

  methods: {
    calcPaneInstances(isForceUpdate = false) {
      if (this.$slots.default) {
        const paneSlots = this.$slots.default.filter(
          (vnode) =>
            vnode.tag &&
            vnode.componentOptions &&
            vnode.componentOptions.Ctor.options.name === "VwTabPanel"
        );


        // update indeed
        const panes = paneSlots.map(
          ({ componentInstance }) => componentInstance
        );
        const panesChanged = !(
          panes.length === this.panes.length &&
          panes.every((pane, index) => pane === this.panes[index])
        );
        if (isForceUpdate || panesChanged) {
          this.panes = panes;
        }
      } else if (this.panes.length !== 0) {
        this.panes = [];
      }

      
    },
    handleTabClick(tab, tabName, event) {
      if (tab.disabled) return;
      this.setCurrentName(tabName);
      this.$emit("tab-click", tab, event);
    },
    setCurrentName(value) {
      const changeCurrentName = () => {
        this.currentName = value;
        this.$emit("input", value);
      };
      if (this.currentName !== value && this.beforeLeave) {
        const before = this.beforeLeave(value, this.currentName);
        if (before && before.then) {
          before.then(
            () => {
              changeCurrentName();
            }
          );
        } else if (before !== false) {
          changeCurrentName();
        }
      } else {
        changeCurrentName();
      }
    },
  },

  render(h) {
    let { handleTabClick, currentName, panes } = this;
    const navData = {
      props: {
        currentName,
        onTabClick: handleTabClick,
        panes,
      },
      ref: "nav",
    };
    const header = (
      <view class="vw-tabs_header">
        <tab-nav {...navData}></tab-nav>
      </view>
    );
    const panels = <view class="vw-tabs_content">{this.$slots.default}</view>;
    return <view class="vw-tabs">{[header, panels]}</view>;
  },

  created() {
    
    if (!this.currentName) {
      this.setCurrentName("0");
    }

    this.$on("tab-nav-update", this.calcPaneInstances.bind(null, true));
  },

  mounted() {
    this.calcPaneInstances();
  },

  updated() {
    this.calcPaneInstances();
  },
};
</script>
