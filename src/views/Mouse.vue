<template>
  <p>Mouse position is at: {{ x }}, {{ y }}</p>
</template>

<script>
import { useMouse } from '@/composables/useMouse.js'

export default {
  setup() {
    const { x, y } = useMouse()

    return {
      x, y
    }
  }
}
</script>