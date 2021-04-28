import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import NotFound from '../pages/404.vue'
import music from './music'

const router = createRouter({
  history: createWebHistory('vue3-app'),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
    ...music,
  ],
})

export default router
