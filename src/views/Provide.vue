<template>
<h3>Provide - Inject</h3>
  <inject />
  <p>From Parent: {{ fruit }}</p>
</template>

<script>
import component_inject from '@/components/04_inject.vue'

import { ref, provide } from 'vue'

export default {
  name: 'Provide-Inject',
  components: {
    inject: component_inject
  },
   
  setup () {
    const fruit = ref('Fresas')

    const updateFruit = (value) => {
      fruit.value = value
    }

    // provide('message', 'hello')

    provide('fruit', {
      fruit,
      updateFruit
    })

    return { fruit }
  }
}
</script>

<style>

</style>