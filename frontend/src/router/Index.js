import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

//component router
import login from "../views/Login.vue";
import register from "../views/Register.vue";
import dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: login,
    meta: { isGuest: true },
  },
  {
    path: "/register",
    name: "register",
    component: register,
    meta: { isGuest: true },
  },
  {
    path: "/",
    name: "dashboard",
    component: dashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.state.user.token) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
