<template>
  <ul>
    <div @click="change">
      <slot name="title"></slot>
    </div>
    <div v-show="showChild" class="submenu-child-box">
      <slot></slot>
    </div>
  </ul>
</template>
<script>
export default {
  name: "MySubmenu",
  data() {
    return {
      showChild: false
    };
  },
  methods: {
    change() {
      this.showChild = !this.showChild;
    }
  }
};
</script>
<style lang="scss">
ul {
  padding: 0;
}
.submenu-child-box {
  overflow: hidden;
}
</style>
