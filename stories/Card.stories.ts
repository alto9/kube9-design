import type { Meta, StoryObj } from '@storybook/vue3'
import Card from '../src/components/Card/Card.vue'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'shadow'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    padding: 'md',
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <Card v-bind="args">
        <h3 class="text-xl font-semibold mb-2">Card Title</h3>
        <p>This is a default card with some content. It can contain any content you need.</p>
      </Card>
    `,
  }),
}

export const WithHeader: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card>
        <template #header>
          <h3 class="text-xl font-semibold">Card Header</h3>
        </template>
        <p>Card body content goes here.</p>
        <template #footer>
          <button class="btn btn-primary">Action</button>
        </template>
      </Card>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div class="grid grid-cols-3 gap-4">
        <Card variant="default">
          <h4 class="font-semibold mb-2">Default</h4>
          <p>Default card style</p>
        </Card>
        <Card variant="bordered">
          <h4 class="font-semibold mb-2">Bordered</h4>
          <p>Card with border</p>
        </Card>
        <Card variant="shadow">
          <h4 class="font-semibold mb-2">Shadow</h4>
          <p>Card with shadow</p>
        </Card>
      </div>
    `,
  }),
}

