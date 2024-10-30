  import { createWebHashHistory, createRouter } from "vue-router";

import WorkoutsPage from "./components/WorkoutsPage.vue"
import HomePage from "./components/HomePage.vue"
import LoginPage from "./components/LoginPage.vue"

const routes = [
  { path: "/LoginPage", component: LoginPage},
  { path: "/WorkoutsPage", component: WorkoutsPage},
  { path: "/HomePage", component: HomePage }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router