<template>
  <h4>Dos componentes comparten un mismo contador</h4>
  <component-a />
  <component-b />
  <hr>
  <h4>Contador local y global con composable</h4>
  <component-c-local />
  <component-d-local />
</template>

<script>
import ComponentA from '@/components/state_management/ComponentA.vue'
import ComponentB from '@/components/state_management/ComponentB.vue'
import ComponentCLocal from '@/components/state_management/ComponentC_Local.vue'
import ComponentDLocal from '@/components/state_management/ComponentD_Local.vue'
export default {
  name: 'State_Management',
  components: { ComponentA, ComponentB, ComponentCLocal, ComponentDLocal }
}
</script>

<style>

</style>