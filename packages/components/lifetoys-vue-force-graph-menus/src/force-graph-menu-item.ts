import type { ExtractPropTypes } from 'vue'

export const menuItemProps = {
    data: {
        type: Array,
        default: () => [],
        validator: (v) => {
            return v.every(item => item.hasOwnProperty('id') && item.hasOwnProperty('label'))
        }
    }
}
export type MenuProps = ExtractPropTypes<typeof menuItemProps>