import Music from '../pages/music/home/index.vue'
import PlayListDetail from '../pages/music/playlist/detail.vue'

export default [
  {
    path: '/music',
    name: 'Music',
    component: Music,
  },
  {
    path: '/playlist/detail',
    name: 'PlayListDetail',
    component: PlayListDetail,
  },
]
