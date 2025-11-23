import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Showcase/Button Variants',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const AllBlueVariants: Story = {
  render: () => ({
    template: `
      <div class="space-y-4 p-8">
        <h2 class="text-2xl font-bold mb-4">Blue Button Variants</h2>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn--blue-500">Blue 500</button>
          <button class="btn btn--blue-400">Blue 400</button>
          <button class="btn btn--blue-300">Blue 300</button>
          <button class="btn btn--blue-200">Blue 200</button>
          <button class="btn btn--blue-100">Blue 100</button>
        </div>
      </div>
    `,
  }),
}

export const AllGreenVariants: Story = {
  render: () => ({
    template: `
      <div class="space-y-4 p-8">
        <h2 class="text-2xl font-bold mb-4">Green Button Variants</h2>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn--green-500">Green 500</button>
          <button class="btn btn--green-400">Green 400</button>
          <button class="btn btn--green-300">Green 300</button>
          <button class="btn btn--green-200">Green 200</button>
          <button class="btn btn--green-100">Green 100</button>
        </div>
      </div>
    `,
  }),
}

export const StyleVariants: Story = {
  render: () => ({
    template: `
      <div class="space-y-4 p-8">
        <h2 class="text-2xl font-bold mb-4">Style Variants</h2>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn--white">White</button>
          <button class="btn btn--black">Black</button>
          <button class="btn btn--transparent">Transparent</button>
          <button class="btn btn--tra-black">Tra Black</button>
          <button class="btn btn--tra-grey">Tra Grey</button>
          <button class="btn btn--tra-white">Tra White</button>
        </div>
      </div>
    `,
  }),
}

