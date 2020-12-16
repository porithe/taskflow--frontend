import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";
import Routes from "@/constants/routes";
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import store from "@/store";
import Profile from "@/views/Profile.vue";
import AuthGetters from "@/constants/authGetters";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: Routes.HOME,
    component: Home
  },
  {
    path: "/register",
    name: Routes.REGISTER,
    component: Register
  },
  {
    path: "/login",
    name: Routes.LOGIN,
    component: Login
  },
  {
    path: "/profile",
    name: Routes.PROFILE,
    component: Profile
  },
  {
    path: "/dashboard",
    name: Routes.DASHBOARD,
    component: Dashboard
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const token = store.getters[`authStore/${AuthGetters.TOKEN}`];
  if (
    to.name !== Routes.REGISTER &&
    to.name !== Routes.LOGIN &&
    to.name !== Routes.HOME &&
    !token
  )
    next({ name: Routes.LOGIN });
  else if (
    (to.name === Routes.REGISTER ||
      to.name === Routes.LOGIN ||
      to.name === Routes.HOME) &&
    token
  )
    next({
      name: Routes.PROFILE
    });
  else next();
});

export default router;
