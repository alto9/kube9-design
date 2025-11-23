import { mergeConfig } from 'vite'
import { defineConfig } from '@storybook/vue3-vite'

export default mergeConfig(
  defineConfig({}),
  {
    // Add any Vite config overrides here
  }
)

