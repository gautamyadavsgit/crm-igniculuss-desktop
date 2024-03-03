import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import AuthVue from '@/components/Auth/Auth.vue'
import FormLable from '@/components/Form/Label.vue'
import { Icon } from '@iconify/vue'
import MainCard from '@/views/Dashboard/Components/MainCard.vue'

const app = createApp(App)

app.use(router)
app.component('auth-vue', AuthVue)
app.component('form-label', FormLable)
app.component('Icon', Icon)
app.component(MainCard.name, MainCard)
app.mount('#app')
