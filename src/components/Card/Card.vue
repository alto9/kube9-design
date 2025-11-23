<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div class="card-body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface CardProps {
  variant?: 'default' | 'bordered' | 'shadow'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'default',
  padding: 'md'
})

const cardClasses = computed(() => {
  const base = 'card bg-white rounded-lg'
  
  const variantClasses = {
    default: '',
    bordered: 'border',
    shadow: 'shadow-lg'
  }
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  return [
    base,
    variantClasses[props.variant],
    paddingClasses[props.padding]
  ].filter(Boolean).join(' ')
})
</script>

<style scoped>
.card-header {
  border-bottom: 1px solid var(--color-gray-200);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.card-body {
  color: var(--color-text-secondary);
}

.card-footer {
  border-top: 1px solid var(--color-gray-200);
  padding-top: 1rem;
  margin-top: 1rem;
}

.card.bordered {
  border: 1px solid var(--color-gray-200);
}
</style>

