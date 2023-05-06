import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min'
import "bootstrap-vue/dist/bootstrap-vue-icons.css"

const app = createApp(App)
app.use(router)
app.mount('#app')
