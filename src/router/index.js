import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home.vue'
import music from './music'

const router = createRouter({
  history: createWebHashHistory(),
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
    ...music,
  ],
})

export default router
