# @kube9/design

kube9 Design System - Vue components and design tokens based on martex-template.

## Installation

```bash
npm install @kube9/design
```

**Note**: This package is published to GitHub Packages. Make sure to configure npm to use GitHub Packages:

```bash
npm config set @kube9:registry https://npm.pkg.github.com
```

## Usage

### Import Components

```vue
<script setup>
import { Button, Card } from '@kube9/design/components'
import '@kube9/design/styles'
</script>

<template>
  <Card>
    <Button variant="primary">Click me</Button>
  </Card>
</template>
```

### Import Design Tokens

```typescript
import { colors, typography, spacing } from '@kube9/design/tokens'

const primaryColor = colors.blue400
const fontSize = typography.fontSizes.lg
```

### Use Tailwind Config

```javascript
// tailwind.config.js
import kube9DesignConfig from '@kube9/design/tailwind'

export default {
  ...kube9DesignConfig,
  content: [
    './src/**/*.{vue,js,ts}',
  ],
}
```

## Components

### Button

```vue
<Button variant="primary" size="md">Click me</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'transparent' | 'white' | 'black'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `tag`: 'button' | 'a' | 'router-link'

### Card

```vue
<Card variant="shadow" padding="md">
  <template #header>Header</template>
  Content goes here
  <template #footer>Footer</template>
</Card>
```

**Props:**
- `variant`: 'default' | 'bordered' | 'shadow'
- `padding`: 'none' | 'sm' | 'md' | 'lg'

## Design Tokens

### Colors

```typescript
import { colors } from '@kube9/design/tokens'

colors.blue400  // Primary blue
colors.green400 // Secondary green
colors.textPrimary
colors.textSecondary
```

### Typography

```typescript
import { typography } from '@kube9/design/tokens'

typography.fontFamilies.rubik
typography.fontSizes.lg
typography.fontWeights.semibold
```

### Spacing

```typescript
import { spacing, breakpoints } from '@kube9/design/tokens'

spacing[4]  // 1rem
breakpoints.md  // 768px
```

## Storybook

View the component library and documentation:

```bash
npm run storybook
```

Or visit the hosted Storybook at: https://alto9.github.io/kube9-design/ (deployed from this repository)

## Development

### Prerequisites

- **Node.js 22+** (LTS recommended) - Use [NVM](https://github.com/nvm-sh/nvm) to manage versions
- **npm** or **yarn** - Package manager

### Setup

```bash
# Use the correct Node version (if using NVM)
nvm use

# Install dependencies
npm install

# Build package
npm run build

# Run Storybook
npm run storybook

# Build Storybook for deployment
npm run build-storybook
```

## Design System Principles

- **Based on martex-template**: Complete martex-template CSS is imported as the foundation
  - The `martex-base.css` file is a copy of the martex-template CSS (never modified)
  - All martex-template classes and styles are available in Storybook
  - Vue components use martex-template classes (e.g., `btn btn--blue-400`)
- **Tailwind v4**: Uses latest Tailwind CSS with modern features (same as martex-template)
- **Vue 3**: Built with Vue 3 Composition API and TypeScript
- **Fully Styled**: Components leverage martex-template CSS classes, not custom styles
- **Design Tokens**: Colors, typography, and spacing extracted from martex-template

## License

MIT

