import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { isDev } from '../utils/config'
import Home from '../pages/home.vue'

const routerBase = import.meta.env.VITE_ROUTER_BASE

const router = createRouter({
  history: isDev ? createWebHashHistory() : createWebHistory(routerBase),
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
  ],
})

export default router
