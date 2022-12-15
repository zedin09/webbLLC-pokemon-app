import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Favorites from "../components/Favorites.vue";

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
    {
      path: "/favorites",
      component: Favorites,
      name: "Favorites",
    },
  ]
})

export default router
