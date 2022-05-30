import {computed, reactive} from "vue";

export function useForm(props, emit) {
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
        emit('addRecipe', newRecipe)
        //props.onAdd(newRecipe)
        //this.$emit('addRecipe', newRecipe)
        form.title = form.description = ''
    }

    const valid = computed(() => {
        return form.title.trim() && form.description.trim()
    })

    return {form, submitForm, valid}
}