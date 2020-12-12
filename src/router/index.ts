import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";
import Routes from "@/constants/routes";

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
