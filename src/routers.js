import MainScreen from "./components/MainScreen.vue";
import LoginPage from "./components/LoginPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routers = [
  {
    name: "MainScreen",
    component: MainScreen,
    path: "/",
  },
  {
    name: "LoginPage",
    component: LoginPage,
    path: "/sign-up",
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routers,
});
export default router;
