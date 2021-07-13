<template>
  <div class="layout-wrapper" :class="{ 'layout-wrapper-has-sider': sider }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "layoutwrapper",
  props: {
    hassider: {
      type: String,
      default: "col",
      validator: function(value) {
        return value === 'col' || value === 'row'
      }
    }
  },
  computed: {
    sider() {
      if (this.hassider === "col") {
        return false;
      } else if (this.hassider === "row") {
        return true;
      }
    }
  }
};
</script>
<style lang="scss">
.layout-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.layout-wrapper.layout-wrapper-has-sider {
  flex-direction: row;
}
</style>
