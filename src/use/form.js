import {computed, reactive} from "vue";

export function useForm(props, context) {
    const form = reactive({
        title: '',
        description: '',
    })

    const submitForm = () => {
        const newRecipe = {
            title: form.title.trim(),
            description: form.description.trim(),
            id: Date.now().toString()
        }
        props.addRecipe(newRecipe)
        form.title = form.description = ''
    }

    const valid = computed(() => {
        return form.title.trim() && form.description.trim()
    })

    return {form, submitForm, valid}
}