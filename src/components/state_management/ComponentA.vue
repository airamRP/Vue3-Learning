<template>
  <button @click="store.decrement()">Decrement From A: {{ store.count }}</button>
</template>

<script>
import { store } from './store.js'

export default {
  setup() {
    return { store }
  }
}
</script>
