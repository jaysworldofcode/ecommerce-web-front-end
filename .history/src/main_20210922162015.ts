import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/global.css';
import router from './router'
import { Vue } from 'vue-class-component';

export const eventBus = createApp; // added line

const app = createApp(App).use(router)

app.use(ElementPlus)
app.mount('#app')
