import './assets/main.css'
import './assets/owl.carousel.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { languagePack, setLanguage, LangList } from "./languages/index";
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)
app.use(Notifications)
// load
app.use(router)
app.mount('#app')
