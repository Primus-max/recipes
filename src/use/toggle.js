import {ref} from "vue";

export function useToggle() {
    let visible = ref(false)

    function toggle() {
        visible.value = !visible.value
        console.log(visible)
    }

    return {
        visible, toggle
    }
}