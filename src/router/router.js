import Home from "@/views/Home.vue";
export default [
  {
    path: "/",
    name: "Home",
    component: Home,
    // beforeEnter: (to, from, next) => { //路由独享守卫，给一个路由单独配置导航守卫
    //   // ...
    // }
    meta: {
      title: "主页"
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/argu/:name?",
    name: "argu",
    component: () => import("@/views/argu.vue"),
    props: true
  },
  {
    path: "/count2",
    name: "count2",
    component: () => import("@/views/count-to.vue")
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("@/views/layout.vue")
  },
  {
    path: "/menu",
    name: "menu_page",
    component: () => import("@/views/menu_page.vue")
  },
  {
    path: "/splitspane",
    name: "splitspane",
    component: () => import("@/views/SplitSpane")
  },
  {
    path: "/parent",
    name: "parent",
    component: () => import("@/views/parent.vue"),
    children: [
      {
        path: "child",
        name: "child",
        component: () => import("@/views/child.vue")
      },
      {
        path: "child2",
        name: "child2",
        component: () => import("@/views/child2.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue")
  },
  {
    path: "*",
    component: () => import("@/views/error_404.vue")
  }
];
