import { createApp } from 'vue';
import App from './app.vue';
import VueForceGraphContextMenu from '@lifetoys-vue-force-graph/components/lifetoys-vue-force-graph-menus';
import VueForceGraph2D from '@lifetoys-vue-force-graph/components/lifetoys-vue-force-graph-2d';

const app = createApp(App)

app.use(VueForceGraphContextMenu);
app.use(VueForceGraph2D);

app.mount('#app')
