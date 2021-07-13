<template>
  <my-submenu>
    <div slot="title">{{ parentitle}}</div>
    <template v-for="(item, index) in children">
      <my-menu-item v-if="!item.children" :key="`resubmenu_${index}`">{{ item.title }}</my-menu-item>
      <re-submenu v-else :children="item.children" :parentitle='item.title' :key="`resubmenu_${index}`"></re-submenu>
    </template>
  </my-submenu>
  <!-- <div>
    <template v-for="(item, index) in children">
      <my-menu-item v-if="!item.children" :key="index">{{ item.title }}</my-menu-item>
      <my-submenu v-else :key="index">
        <div slot="title">{{ item.title }}</div>
        <re-submenu :children="item.children"></re-submenu>
      </my-submenu>
    </template>
  </div> -->
</template>
<script>
import MyMenuItem from "_c/menu/my-menu-item.vue";
import MySubmenu from "_c/menu/my-submenu.vue";
export default {
  name: "ReSubmenu",
  components: {
    MyMenuItem,
    MySubmenu
  },
  props: {
    children: {
      type: Array,
      default: []
    },
    parentitle: {
      type: String,
      default: ''
    }
  }
};
</script>
<style lang="scss"></style>
