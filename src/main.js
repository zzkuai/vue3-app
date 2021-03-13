import { createApp } from 'vue'
import './assets/styles/index.less'
import App from './App.vue'
import router from './router'
import useVant from './plugins/vant'

const app = createApp(App)

useVant(app)
app.use(router)
app.mount('#app')
