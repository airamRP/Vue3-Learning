<template>
  <p>From Child: {{ fruit }}</p>
  <label for="newFruit"></label>
  <input type="text" v-model="newFruit" v-on:keyup.enter="editFruit" ref="inputFruit" />
  <button @click="editFruit">Edit Fruit</button>
</template>

<script>
import { ref, inject, onMounted } from 'vue'
export default {
  setup() {
    const inputFruit = ref(null)
    const newFruit = ref('')
    const { fruit, updateFruit } = inject('fruit')

    const editFruit = () => {
      if(newFruit.value.length) {
        updateFruit(newFruit.value)
      }
      newFruit.value = ''
      if (inputFruit.value) {
        inputFruit.value.focus()
      }
    }
    onMounted(() => {
      if (inputFruit.value) {
        inputFruit.value.focus()
      }
    })

    return { newFruit, fruit, editFruit, inputFruit }
  }

}
</script>

<style>
</style>