import { ref } from 'vue'

const globalCount = ref(1)

export const useCount = () => {
  const localCount = ref(2)
  const localIncrement = () => {
    localCount.value++
  }
  const globalIncrement = () => {
    globalCount.value++
  }

  return {
    globalCount, localCount, localIncrement, globalIncrement
  }
}
