import type { ExtractPropTypes } from 'vue'

export const contextMenuProps = {
    bindType: {
        type: String,
        default: "node",
        validator: (v) => {
            return ["node", "edge", 'canvas'].includes(v)
        }
    },
    width: {
        type: [Number, String],
        default: 'auto'
    },
    height: {
        type: [Number, String],
        default: "auto"
    },
    backgroundColor: {
        type: String,
        default: "rgba(0,0,0,0)"
    }
}

export type VueForceGraphContextMenuProps = ExtractPropTypes<typeof contextMenuProps>