<template>
    <form class="form" @submit.prevent="submitForm">
        <h1>Добавить рецепт</h1>
        <div v-if="!visible">
            <div class="input">
                <input type="text" placeholder="Название рецепта" v-model="form.title">
            </div>
            <div class="input">
                <input type="text" placeholder="Описание рецепта" v-model="form.description">
            </div>
        </div>

        <div class="buttons">
            <button class="btn" type="submit" :disabled="!valid">Создать</button>
            <button class="btn secondary" type="button" @click="toggle">
                {{ visible ? 'Убрать':'Показать' }} форму
            </button>
        </div>
    </form>
</template>

<script >
    import {ref, reactive, computed} from 'vue'
    import {useToggle} from "@/use/toggle.js"


    // let visible = ref(false)
    //
    // function toggle() {
    //     visible.value = !visible.value
    //     console.log(visible)
    // }

    // useToggle()
    // const form = reactive({
    //     title: '',
    //     description: '',
    // })
    //
    // const submitForm = () => {
    //     const newRecipe = {
    //         title: form.title.trim(),
    //         description: form.description.trim(),
    //         id: Date.now().toString()
    //     }
    //     this.$emit('addRecipe', newRecipe)
    //     form.title = form.description = ''
    // }
    //
    // const valid = computed(() => {
    //     return form.title.trim() && form.description.trim()
    // })


    export default {


        setup() {
            // let visible = ref(false)
            //
            // const toggle = () => {
            //     visible.value = !visible.value
            // }


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
                this.$emit('addRecipe', newRecipe)
                form.title = form.description = ''
            }

            const valid = computed(() => {
                return form.title.trim() && form.description.trim()
            })

            return {
                valid,
                submitForm,
                form,
                ...useToggle()

            }
        },

        // data() {
        //     return {
        //         recipeTittle: '',
        //         recipeDescription: '',
        //         //visible: true,
        //     }
        // },
        // methods: {
        //     submitForm() {
        //         const newRecipe = {
        //             title: this.recipeTittle.trim(),
        //             description: this.recipeDescription.trim(),
        //             id: Date.now().toString()
        //         }
        //         this.$emit('addRecipe', newRecipe)
        //         this.recipeTittle = this.recipeDescription = ''
        //     },
        //     // toggle(){
        //     //   this.visible = !this.visible
        //     // },
        // },
        // computed: {
        //     valid() {
        //         return this.recipeTittle.trim() && this.recipeDescription.trim()
        //     }
        // },

    }
</script>

<style>
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        border: 1px solid #eee;
        margin-bottom: 1rem;
    }

    .form h1 {
        margin: 0;
        margin-bottom: 1rem;
    }

    .input {
        margin-bottom: 1rem;
    }

    .input input {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px 8px;
        width: 400px;
    }

    .buttons {
        width: 400px;
        display: flex;
        justify-content: space-around;
    }
</style>
