export default [
  {
    path: '/music',
    name: 'Music',
    component: () => import('../pages/music/home/index.vue'),
  },
  {
    path: '/playlist/detail',
    name: 'PlayListDetail',
    component: () => import('../pages/music/playlist/detail.vue'),
  },
]
