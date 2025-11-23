# Styles Directory

This directory contains the CSS foundation for the kube9 design system.

## Files

- **`index.css`** - Main entry point that imports martex-base.css
- **`martex-base.css`** - Complete CSS from martex-template (copied, never modified)

## martex-base.css

This file is a **direct copy** of the martex-template CSS from:
`alto9-docs/marketing/martex-template/martex/src/input.css`

**Important**: This file should NEVER be modified. If you need to update it:
1. Copy the latest version from the martex-template location
2. Replace this file
3. Test that everything still works

## Usage

The martex-template CSS provides:
- All button variants (`.btn--blue-400`, `.btn--green-400`, etc.)
- Component styles (cards, forms, navigation, etc.)
- Utility classes (`.tra-link`, `.hover--white`, etc.)
- Responsive utilities
- Icon styles
- Layout helpers

Vue components should use these classes directly rather than creating custom styles.

## Example

```vue
<template>
  <!-- Use martex-template classes -->
  <button class="btn btn--blue-400 btn-sm">Click me</button>
  <a href="#" class="tra-link">Link text</a>
</template>
```

