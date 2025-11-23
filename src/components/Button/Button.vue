<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'transparent' | 'white' | 'black'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  tag?: 'button' | 'a' | 'router-link'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  tag: 'button'
})

const buttonClasses = computed(() => {
  // Use martex-template button classes directly
  const base = 'btn'
  
  // Size classes (martex-template classes)
  const sizeClasses = {
    sm: 'btn-sm',
    md: '', // Default size
    lg: '' // Can add btn-lg if martex-template has it
  }
  
  // Variant classes (martex-template button variants)
  const variantClasses = {
    primary: 'btn--blue-400',
    secondary: 'btn--green-400',
    outline: 'btn--blue-100', // Transparent with border
    transparent: 'btn--transparent',
    white: 'btn--white',
    black: 'btn--black'
  }
  
  const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  return [
    base,
    sizeClasses[props.size],
    variantClasses[props.variant],
    disabledClass
  ].filter(Boolean).join(' ')
})
</script>

