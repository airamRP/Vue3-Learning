<template>
  <h2>Counter</h2>
  <div>
    <span>Counter: {{ formattedCounter }} &nbsp;</span>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <label for="amount">&nbsp;&nbsp;&nbsp;Cantidad </label>
    <input type="text" v-model.number="amount" />
  </div>
  <hr>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name: 'Counter',
  setup() {
    const amount = ref(1)
    const counter = ref(0)
    const increment = () => {
      counter.value += amount.value
    }
    const decrement = () => {
      counter.value -= amount.value
    }
    const formattedCounter = computed(() => new Intl.NumberFormat('de-DE', {}).format(counter.value))
    return { counter, increment, decrement, amount, formattedCounter }
  }
}
</script>

<style scoped lang="scss">
input {
  text-align: right;
  width: 50px;
}
</style>
