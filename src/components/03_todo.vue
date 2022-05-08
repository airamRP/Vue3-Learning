<template>
  {{ todo }}
  <button @click="emitRemove(todo)">X <small>(emit-setup)</small></button>
  <button @click="$emit('remove', todo)">X <small>(emit-template)</small></button>
</template>

<script>
export default {
  props: {
    todo: String
  },
  emits: ['remove'],
  setup(_, {emit}) {
    const emitRemove = (value) => {
      emit('remove', value)
    }
    return { emitRemove }
  }
}
</script>
