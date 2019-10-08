import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/layout/Layout.vue"),
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("views/home/Home.vue")
        },
        {
          path: "/about",
          name: "about",
          component: () => import("views/about/About.vue")
        },
        {
          path: "/echarts",
          name: "echarts",
          component: () => import("views/echarts/Echarts.vue")
        },
        {
          path: "/dplayer",
          name: "dplayer",
          component: () => import("views/player/Dplayer.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/Login.vue")
    }
  ]
});
