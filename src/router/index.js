import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import FullRecipe from '../views/FullRecipe.vue'
import SearchView from '../views/SearchView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/recipe/:id',
      name: 'details',
      component: FullRecipe,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/search/byIngredient/:ingredient',
      name: 'ingredients',
      component: ListView
    },
    {
      path: '/search/byKey/:key',
      name: 'letters',
      component: ListView
    },
    {
      path: '/search/list',
      name: 'list',
      component: ListView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
