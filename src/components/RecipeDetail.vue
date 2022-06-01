<template>
  <div class="detail">
    <div class="recipe" v-if="recipe">
      <h2>{{ recipe.title }}</h2>
      <a href="#" @click.prevent="toggle">Показать</a>
      <p v-if="visible">{{ recipe.description }}</p>
      <button class="btn remove" @click="$emit('remove', recipe.id)">Удалить</button>
    </div>
  </div>
</template>

<script>
import {watch} from "vue"
import {useToggle} from "@/use/toggle";

export default {
  props:{
    recipe:{
      type: Object
    },
    current: Boolean
  },

  setup(props){
    const {visible, toggle} = useToggle()

    watch(()=> props.current, ()=>{
      visible.value = false
    })

    return{visible, toggle}
  },
}
</script>

<style>
  .recipe {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .recipe p {
    font-size: .8rem;
    margin-bottom: .5rem;
  }

  .recipe a, .recipe h2 {
    margin-bottom: .5rem;
  }
</style>
