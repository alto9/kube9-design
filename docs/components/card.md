# Card Component

Vue card component using martex-template styles.

## Usage

```vue
<template>
  <Card variant="shadow" padding="md">
    <template #header>Header</template>
    Content goes here
    <template #footer>Footer</template>
  </Card>
</template>

<script setup>
import { Card } from '@kube9/design/components'
</script>
```

## Props

- `variant`: 'default' | 'bordered' | 'shadow'
- `padding`: 'none' | 'sm' | 'md' | 'lg'

