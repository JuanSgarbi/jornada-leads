import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import VueTheMask from 'vue-the-mask'

createApp(App).use(router).use(store).use(VueTheMask).mount('#app')
