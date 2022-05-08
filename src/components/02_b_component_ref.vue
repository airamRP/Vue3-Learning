<template>
  <h2>Ref on Child Component</h2>
  <p>
    Se obtiene una instancia del componente hijo. Se pueden recuperar datos
    del componente hijo.
  </p>
  <p>Preferible usar events y props para la comunicación entre padre e hijo</p>
  <child-ref ref="childRef" />
  <h4>Acceso a datos del hijo desde el padre con ref-component</h4>
  <p v-if="childRef">From parent: {{ childRef.fruit }}</p>
  <button @click="childRef.greeting">Salúdame</button>
</template>

<script>
import ChildRef from '@/components/ChildRef.vue'
import { ref, onMounted } from 'vue'
export default {
  name: 'ComponentRef',
  components: {
    ChildRef
  },

  setup() {
    // 1. Declarar con el mismo nombre en setup y template
    // 2. En componente child return datos y funciones que se van a usar en el padre
    // 3. Acceso con childref. + 'función o dato'
    const childRef = ref(null)
    onMounted(() => console.log('ChildRef', childRef.value.fruit))

    return {
      childRef
    }
  }
}
</script>