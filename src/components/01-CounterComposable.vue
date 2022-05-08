<template>
  <h2>Counter Composable with Ref</h2>
  <span>Conter: {{ formattedCounterRef }}&nbsp;</span>
  <button @click="incrementRef">+</button>
  <button @click="decrementRef">-</button>
  <label>&nbsp;&nbsp;&nbsp;Cantidad </label>
  <input type="text" v-model.number="amountRef" />
  
  <h2>Counter Composable with Reactive</h2>
  <span>Conter: {{ formattedCounter }}&nbsp;</span>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <label>&nbsp;&nbsp;&nbsp;Cantidad </label>
  <input type="text" v-model.number="amount" />
</template>

<script>
import { useCounterRef } from '../composables/useCounter'
import { useCounter } from '../composables/useCounterReactive'
import { ref } from 'vue'
export default {
  name: 'CounterComposable',
  setup() {
    const amountRef = ref(1)
    const amount = ref(1)

    const { increment: incrementRef, decrement: decrementRef, formattedCounter: formattedCounterRef } = useCounterRef(amountRef)
    const { counter, increment, decrement, formattedCounter } = useCounter(amount)
    // TODO por qué es necesario counter si no se usa en el template
    return { counter, increment, decrement, amount, formattedCounter,
      amountRef, incrementRef, decrementRef, formattedCounterRef }
  }
}
</script>

<style scoped lang="scss">
input {
  text-align: right;
  width: 50px;
}
</style>
