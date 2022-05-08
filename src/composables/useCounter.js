import { ref, computed } from 'vue'

export function useCounterRef(amount) {

  const counter = ref(0)

  const increment = () => {
    counter.value += amount.value
  }
  const decrement = () => {
    counter.value -= amount.value
  }
  const formattedCounter = computed(() => new Intl.NumberFormat('de-DE', {}).format(counter.value))

  return { counter, increment, decrement, formattedCounter }
}