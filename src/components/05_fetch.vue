<template>
    Load post id:
  <button v-for="i in 5" @click="id = i" :key="i">{{ i }}</button>
  
	<div v-if="error">
    <p>Oops! Error encountered: {{ error.message }}</p>
    <button @click="retry">Retry</button>
  </div>
  <div v-else-if="data">Data loaded: <pre>{{ data }}</pre></div>
  <div v-else>Loading...</div>
</template>

<script>
import { ref, computed } from 'vue'
import { useFetch } from '@/composables/useFetch.js'

export default {
  name: 'Fetch',
  setup() {
    const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'
    const id = ref('1')
    const url = computed(() => baseUrl + id.value)

    const { data, error, retry } = useFetch(url)
    
    return { id, data, error, retry }
  }
}
</script>

