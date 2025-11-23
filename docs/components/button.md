# Button Component

Vue button component using martex-template styles.

## Usage

```vue
<template>
  <Button variant="primary" size="md">Click me</Button>
</template>

<script setup>
import { Button } from '@kube9/design/components'
</script>
```

## Props

- `variant`: 'primary' | 'secondary' | 'outline' | 'transparent' | 'white' | 'black'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `tag`: 'button' | 'a' | 'router-link'

## Examples

<div class="flex flex-wrap gap-4 my-4">
  <button class="btn btn--blue-400">Primary</button>
  <button class="btn btn--green-400">Secondary</button>
  <button class="btn btn--blue-100">Outline</button>
</div>

