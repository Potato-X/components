<template>
  <div class="menu-box">
    <my-menu>
      <!-- <my-submenu>
        <div slot="title" class="first-menu">111</div>
        <my-menu-item>111-1</my-menu-item>
        <my-menu-item>111-2</my-menu-item>
        <my-menu-item>111-3</my-menu-item>
      </my-submenu> -->
      <template v-for="(item, index) in list">
        <my-menu-item
          v-if="!item.children"
          :key="`menu_item_${index}`"
          class="first-menu"
          >{{ item.title }}</my-menu-item
        >
        <re-submenu
          v-else
          :key="`menu_item_${index}`"
          :children="item.children"
          :parentitle="item.title"
        ></re-submenu>
      </template>
      <!-- <my-submenu>
        <div slot="title" class="first-menu">333</div>
        <my-menu-item>333-1</my-menu-item>
        <my-menu-item>333-2</my-menu-item>
        <my-menu-item>333-3</my-menu-item>
      </my-submenu> -->
    </my-menu>
  </div>
</template>
<script>
import MenuComponents from "_c/menu";
const { MyMenuItem, MyMenu, MySubmenu, ReSubmenu } = MenuComponents;
export default {
  components: {
    MyMenuItem,
    MyMenu,
    MySubmenu,
    ReSubmenu
  },
  data() {
    return {
      list: [
        {
          title: "111"
        },
        {
          title: "222"
        },
        {
          title: "333",
          children: [
            {
              title: "333-1"
            },
            {
              title: "333-2"
            },
            {
              title: "333-3",
              children: [
                {
                  title: "333-3-1"
                },
                {
                  title: "333-3-2",
                  children:[
                    {
                      title:"333-3-2-1"
                    },
                    {
                      title:"333-3-2-2"
                    },
                    {
                      title:"333-3-2-3"
                    },
                  ]
                },
                {
                  title: "333-3-3"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.menu-box {
  width: 300px;
  height: 400px;
}
.first-menu {
  cursor: pointer;
}
</style>
