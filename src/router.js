import Vue from "vue";
import Router from "vue-router";
import home from "@/views/home";
import view1 from "@/views/view-1";
import view2 from "@/views/view-2";
import view3 from "@/views/view-3";
import view4 from "@/views/view-4";
import view5 from "@/views/view-5";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/view-1",
      name: "view-1",
      component: view1,
    },
    {
      path: "/view-2",
      name: "view-2",
      component: view2,
    },
    {
      path: "/view-3",
      name: "view-3",
      component: view3,
    },
    {
      path: "/view-4",
      name: "view-4",
      component: view4,
    },
    {
      path: "/view-5",
      name: "view-5",
      component: view5,
    },

    // {
    //   path: "*",
    //   name: "error",
    //   component: error,
    // },
  ],
});
