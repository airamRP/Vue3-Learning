<template>
  <template-ref />
  <component-ref />
</template>

<script>
import TemplateRef from '@/components/02_a_template_ref.vue'
import ComponentRef from '@/components/02_b_component_ref.vue'

export default {
  name: 'Ref',
  components: {
    TemplateRef,
    ComponentRef
  }
}
</script>