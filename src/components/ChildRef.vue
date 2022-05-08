<template>
  <h3>Child Ref</h3>
  <p>From child: {{ fruit }}</p>
  <input type="text" v-model="fruit">
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const fruit = ref('orange')
    const greeting = () => console.log('Hola')
    return { fruit, greeting }
  }
}
</script>

<style>

</style>