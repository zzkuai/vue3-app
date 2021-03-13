import { createApp } from 'vue'
import './assets/styles/index.less'
import App from './App.vue'
import router from './router'
import useVant from './plugins/vant'
import useDirective from './utils/directive'

const app = createApp(App)

useVant(app)
useDirective(app)
app.use(router)
app.mount('#app')
