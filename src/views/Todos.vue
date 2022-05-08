<template>
  <h2>Comunicación padre-hijo</h2>
  <div>
    <label for="todo">New Todo&nbsp;</label>
    <input type="text" id="todo" v-model="todo" @keyup.enter="add" />
    <button @click="add">Add todo</button>
  </div>
  <div>
    <h4>Lista de todos</h4>
    <ul>
      <li v-for="todo in todos" :key="todo">
        <todo-child :todo="todo" @remove="remove"/>
      </li>
    </ul>
  </div>
</template>

<script>
import TodoChild from '@/components/03_todo.vue'
import { ref } from 'vue'
export default {
  name: 'Todo',
  components: {
    TodoChild
  },
  setup() {
    const todos = ref(['orange', 'apple', 'bannana'])
    const todo = ref('')

    const add = () => {
      if (todo.value.length > 0) {
        todos.value.push(todo.value)
      }
      todo.value = ''
    }

    const remove = (value) => {
      todos.value = todos.value.filter((item) => item != value)
    }

    return { todos, todo, add, remove }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 10px 0px;
}
</style>