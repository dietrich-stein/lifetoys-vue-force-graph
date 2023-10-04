import { createApp } from 'vue'
import App from './app.vue'
import GraphContextMenu from '@lifetoys-vue-force-graph/components/graph-context-menu'
import VueForceGraph2D from '@lifetoys-vue-force-graph/components/vue-force-graph-2d'

const app = createApp(App)

app
    .use(GraphContextMenu)
    .use(VueForceGraph2D)

app.mount('#app')
