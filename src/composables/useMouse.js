import { useEventListener } from './useEvent'
import { ref } from 'vue'
export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  const update = (event) => {
    x.value = event.pageX
    y.value = event.pageY
  }

  useEventListener('mousemove', window, update)

  return {
    x, y
  }
}