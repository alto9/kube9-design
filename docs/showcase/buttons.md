# Buttons

All button variants from martex-template.

## Blue Variants

<div class="flex flex-wrap gap-4 my-4">
  <button class="btn btn--blue-500">Blue 500</button>
  <button class="btn btn--blue-400">Blue 400</button>
  <button class="btn btn--blue-300">Blue 300</button>
  <button class="btn btn--blue-200">Blue 200</button>
  <button class="btn btn--blue-100">Blue 100</button>
</div>

## Green Variants

<div class="flex flex-wrap gap-4 my-4">
  <button class="btn btn--green-500">Green 500</button>
  <button class="btn btn--green-400">Green 400</button>
  <button class="btn btn--green-300">Green 300</button>
  <button class="btn btn--green-200">Green 200</button>
  <button class="btn btn--green-100">Green 100</button>
</div>

## Style Variants

<div class="flex flex-wrap gap-4 my-4">
  <button class="btn btn--white">White</button>
  <button class="btn btn--black">Black</button>
  <button class="btn btn--transparent">Transparent</button>
  <button class="btn btn--tra-black">Tra Black</button>
  <button class="btn btn--tra-grey">Tra Grey</button>
</div>

## Sizes

<div class="flex flex-wrap items-center gap-4 my-4">
  <button class="btn btn-sm btn--blue-400">Small</button>
  <button class="btn btn--blue-400">Medium (default)</button>
</div>

## Usage in Vue

```vue
<template>
  <Button variant="primary" size="md">Click me</Button>
</template>

<script setup>
import { Button } from '@kube9/design/components'
</script>
```

Or use martex classes directly:

```vue
<template>
  <button class="btn btn--blue-400">Click me</button>
</template>
```

