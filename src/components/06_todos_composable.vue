<template>
  <h3>Todos con composables</h3>
  <div>
    <label for="input">New/Edit Todo&nbsp;</label>
    <input type="text" id="input" v-model="todo">
    <button @click="add">Add</button>
  </div>
  <ul>
    <li v-for="(todo, index) in todos" :key="todo">
      <div>
        {{ todo }}
        <button @click="remove(todo)">Remove</button>
        <button @click="removeByIndex(index)">Remove <small> (by Index)</small></button>
        <button @click="edit(index)">Edit</button>
      </div>
    </li>
  </ul>
</template>

<script>
import useTodos from '@/composables/useTodos.js'
export default {
  setup() {
    const { todos, todo, add, remove, removeByIndex, edit } = useTodos()

    return { todos, todo, add, remove, removeByIndex, edit }
  }

}
</script>

<style>
</style>