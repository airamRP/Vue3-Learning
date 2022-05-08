<template>
  <h2>Ref Template</h2>
  <div>
    <label>Sin foco&nbsp;</label>
    <input type="text" />
  </div>

  <div><button @click="show">Show/Hide</button></div>

  <div v-if="showing">
    <label>Con foco&nbsp;</label>
    <input type="text" ref="input" />
  </div>

  <hr>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  name: 'TemplateRef',

  setup() {
    const input = ref(null) // Template ref: Same name in template and setup: input
    const showing = ref(true)

    watchEffect(() => {
      if (input.value) {
        input.value.focus()
      } else {
        console.log('Not mounted or unmounted')
      }
    })

    const show = () => showing.value = !showing.value

    return {
      input, showing, show
    }
  }
}
</script>