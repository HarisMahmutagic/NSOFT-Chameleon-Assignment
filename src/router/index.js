import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Workspace from "../views/Workspace.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Workspace",
    name: "Workspace",
    component: Workspace,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
