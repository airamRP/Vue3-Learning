<template>
    <counter />
    <counter-composable />
</template>

<script>
import Counter from '@/components/01-Counter.vue'
import CounterComposable from '@/components/01-CounterComposable.vue'

export default {
  name: 'CounterView',
  components: {
    Counter, CounterComposable
  }
}
</script>
