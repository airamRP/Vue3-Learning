import { reactive, computed, toRefs } from 'vue'

export function useCounter(amount) {

  const simpleCounter = reactive({
    counter: 0,
    // Arrow function no se debe usar como métodos (propiedad de un objeto). No se tiene acceso a this
    // increment: () => simpleCounter.counter += amount.value,
    increment: function () { this.counter += amount.value },
    decrement: function () { this.counter -= amount.value },
    formattedCounter: computed(() => new Intl.NumberFormat('de-DE', {}).format(simpleCounter.counter))
  })
  return { ...toRefs(simpleCounter) }
}
