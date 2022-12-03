import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import ByLetter from '../views/ByLetter.vue'
import ByCountrie from '../views/ByCountrie.vue'
import ByIngredient from '../views/ByIngredient.vue'
import FullRecipe from '../views/FullRecipe.vue'
import SearchView from '../views/SearchView.vue'
import AboutView from '../views/AboutView.vue'
// import FeedList from '../components/FeedList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          // path: '/:feedName',
          path: '/',
          name: 'feedList',
          component: () => import("../components/FeedList.vue"),
          // component: FeedList,
        }
      ]
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
      component: ByIngredient,
    },
    {
      path: '/search/byCountrie/:countrie',
      name: 'countries',
      component: ByCountrie
    },
    {
      path: '/search/byKey/:key',
      name: 'letters',
      component: ByLetter,
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
