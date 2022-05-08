<template>
  <p>From C:</p>
  <button @click="localIncrement">LocalCount: {{ localCount }}</button>
  <button @click="globalIncrement">GlobalCount: {{ globalCount }}</button>
</template>

<script>
import { useCount } from './counter.js'

export default {
  setup() {
    const { globalCount, localCount, localIncrement, globalIncrement } = useCount()

    return { globalCount, localCount, localIncrement, globalIncrement }
  }
}
</script>

<style>
</style>