import { withInstall, withNoopInstall } from '@lifetoys-vue-force-graph/utils/with-install';
import * as ContextMenu from './src/vue-force-graph-context-menu.vue';
import * as MenuItem from './src/vue-force-graph-menu-item.vue';

const VueForceGraphContextMenu = withInstall(ContextMenu.default, {
    VueForceGraphMenuItem: MenuItem
});

const VueForceGraphMenuItem = withNoopInstall(MenuItem.default);

export {
    VueForceGraphContextMenu,
    VueForceGraphMenuItem
}

export default VueForceGraphContextMenu;