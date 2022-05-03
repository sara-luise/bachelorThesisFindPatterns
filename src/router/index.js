import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../view/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "BaseView",
    component: () =>
      import(/* webpackChunkName: "base" */ "../view/BaseView.vue"),
  },
  {
    path: "/patterns/:uid",
    name: "DetailPattern",
    component: () =>
      import(/* webpackChunkName: "base" */ "../view/DetailPattern.vue"),
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = new VueRouter({
  routes,
});

export default router;
