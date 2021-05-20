import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Suggested from "../views/Suggested.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/suggested",
    name: "Suggested",
    component: Suggested
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
