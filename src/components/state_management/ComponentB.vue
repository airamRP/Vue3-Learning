<template>
  <button @click="store.increment()">Increment From B: {{ store.count }}</button>
</template>

<script>
import { store } from './store.js'

export default {
  setup() {
    return { store }
  }
}
</script>
