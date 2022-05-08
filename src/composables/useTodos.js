import { ref } from 'vue'

export default function () {
  const todos = ref(['orange', 'apple'])
  const todo = ref('')

  const add = () => {
    todos.value.push(todo.value)
    todo.value = ''
  }
  const remove = (todo) => {
    todos.value = todos.value.filter((item) => item !== todo)
  }
  const removeByIndex = (index) => {
    todos.value.splice(index, 1)
  }
  const edit = (index) => {
    if(todo.value.length > 1) {
      todos.value.splice(index, 1, todo.value)
    }
    todo.value = ''
  }
  return { todos, todo, add, remove, removeByIndex, edit }
}