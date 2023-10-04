import { createApp } from 'vue'
import router from './routes'
import { VueForceGraph2D } from "lifetoys-vue-force-graph";
import "lifetoys-vue-force-graph/index.css";
import App from './App.vue'
import './index.css'

const app = createApp(App)
app.use(router);
app.use(VueForceGraph2D);
app.mount('#app')
