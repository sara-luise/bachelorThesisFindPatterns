import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
   {
     path: "/",
     name: "BaseView",
     component: () =>
       import( /* webpackChunkName: "base" */"../view/BaseView.vue"),
   },
   {
     path: "/pattern",
     name: "DetailPattern",
     // route level code-splitting
     // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () =>
       import( /* webpackChunkName: "base" */"../view/DetailPattern.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
