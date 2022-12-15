import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/Home.vue";
import About from "../components/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/about/:slug",
      component: About,
      name: "About",
    },
  ]
})

export default router
