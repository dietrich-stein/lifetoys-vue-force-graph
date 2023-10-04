import {
    VueForceGraph2D,
    VueForceGraphContextMenu,
    VueForceGraphMenuItem
} from '@lifetoys-vue-force-graph/components'
import type { App } from 'vue'

const components = [
    VueForceGraph2D,
    VueForceGraphContextMenu,
    VueForceGraphMenuItem
]

const install = (app: App) => {
    components.forEach(component => {
        app.use(component)
    })
}

export default {
    install
}

export * from '@lifetoys-vue-force-graph/components'