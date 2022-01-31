import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'jquery'

createApp(App).use(store).use(router).mount('#app')
