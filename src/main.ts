import { createApp } from 'vue'
import App from './App.vue'
import WebPlugin from './WebPlugin'

const app = createApp(App)

app.use(WebPlugin)
app.mount('#app')
