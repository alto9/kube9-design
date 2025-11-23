import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Showcase/Martex Template',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const AllButtonVariants: Story = {
  render: () => ({
    template: `
      <div class="space-y-6 p-8">
        <div>
          <h2 class="text-2xl font-bold mb-4">Button Variants</h2>
          <div class="flex flex-wrap gap-4">
            <button class="btn btn--blue-400">Blue 400</button>
            <button class="btn btn--blue-500">Blue 500</button>
            <button class="btn btn--blue-300">Blue 300</button>
            <button class="btn btn--blue-200">Blue 200</button>
            <button class="btn btn--blue-100">Blue 100</button>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">Green Variants</h3>
          <div class="flex flex-wrap gap-4">
            <button class="btn btn--green-400">Green 400</button>
            <button class="btn btn--green-500">Green 500</button>
            <button class="btn btn--green-300">Green 300</button>
            <button class="btn btn--green-200">Green 200</button>
            <button class="btn btn--green-100">Green 100</button>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">Other Variants</h3>
          <div class="flex flex-wrap gap-4">
            <button class="btn btn--white">White</button>
            <button class="btn btn--black">Black</button>
            <button class="btn btn--transparent">Transparent</button>
            <button class="btn btn--tra-black">Tra Black</button>
            <button class="btn btn--tra-grey">Tra Grey</button>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">Sizes</h3>
          <div class="flex flex-wrap items-center gap-4">
            <button class="btn btn-sm btn--blue-400">Small</button>
            <button class="btn btn--blue-400">Medium (default)</button>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Typography: Story = {
  render: () => ({
    template: `
      <div class="space-y-6 p-8">
        <div>
          <h1 class="text-4xl font-bold mb-4">Heading 1</h1>
          <h2 class="text-3xl font-bold mb-4">Heading 2</h2>
          <h3 class="text-2xl font-semibold mb-4">Heading 3</h3>
          <h4 class="text-xl font-semibold mb-4">Heading 4</h4>
          <h5 class="text-lg font-medium mb-4">Heading 5</h5>
          <h6 class="text-base font-medium mb-4">Heading 6</h6>
        </div>
        
        <div>
          <p class="p-sm mb-4">Small paragraph text (p-sm)</p>
          <p class="mb-4">Regular paragraph text - This is the default paragraph style from martex-template.</p>
          <p class="p-md mb-4">Medium paragraph text (p-md)</p>
          <p class="p-lg mb-4">Large paragraph text (p-lg)</p>
          <p class="p-xl mb-4">Extra large paragraph text (p-xl)</p>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">Font Families</h3>
          <p class="font-rubik mb-2">Rubik font family</p>
          <p class="font-jakarta mb-2">Plus Jakarta Sans font family</p>
          <p class="font-inter mb-2">Inter font family</p>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">Links</h3>
          <a href="#" class="tra-link">Tra Link Style</a>
        </div>
      </div>
    `,
  }),
}

export const Forms: Story = {
  render: () => ({
    template: `
      <div class="space-y-6 p-8 max-w-2xl">
        <h2 class="text-2xl font-bold mb-4">Form Elements</h2>
        
        <div>
          <label class="block mb-2 font-medium">Text Input</label>
          <input type="text" class="form-control" placeholder="Enter text...">
        </div>
        
        <div>
          <label class="block mb-2 font-medium">Email Input</label>
          <input type="email" class="form-control" placeholder="email@example.com">
        </div>
        
        <div>
          <label class="block mb-2 font-medium">Textarea</label>
          <textarea class="form-control" rows="4" placeholder="Enter message..."></textarea>
        </div>
        
        <div>
          <label class="block mb-2 font-medium">Select</label>
          <select class="form-control">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        
        <div>
          <button class="btn btn--blue-400">Submit Form</button>
        </div>
      </div>
    `,
  }),
}

export const ColorPalette: Story = {
  render: () => ({
    template: `
      <div class="space-y-8 p-8">
        <h2 class="text-2xl font-bold mb-6">Color Palette</h2>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">Blue Variants</h3>
          <div class="flex flex-wrap gap-4">
            <div class="text-center">
              <div class="w-24 h-24 bg-[#185abd] rounded mb-2"></div>
              <p class="text-sm">Blue 500</p>
              <p class="text-xs text-gray-500">#185abd</p>
            </div>
            <div class="text-center">
              <div class="w-24 h-24 bg-[#1680fb] rounded mb-2"></div>
              <p class="text-sm">Blue 400</p>
              <p class="text-xs text-gray-500">#1680fb</p>
            </div>
            <div class="text-center">
              <div class="w-24 h-24 bg-[#3eb1ff] rounded mb-2"></div>
              <p class="text-sm">Blue 300</p>
              <p class="text-xs text-gray-500">#3eb1ff</p>
            </div>
            <div class="text-center">
              <div class="w-24 h-24 bg-[#e3ebfe] rounded mb-2 border border-gray-200"></div>
              <p class="text-sm">Blue 200</p>
              <p class="text-xs text-gray-500">#e3ebfe</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">Green Variants</h3>
          <div class="flex flex-wrap gap-4">
            <div class="text-center">
              <div class="w-24 h-24 bg-[#00a14e] rounded mb-2"></div>
              <p class="text-sm">Green 500</p>
              <p class="text-xs text-gray-500">#00a14e</p>
            </div>
            <div class="text-center">
              <div class="w-24 h-24 bg-[#00c853] rounded mb-2"></div>
              <p class="text-sm">Green 400</p>
              <p class="text-xs text-gray-500">#00c853</p>
            </div>
            <div class="text-center">
              <div class="w-24 h-24 bg-[#00e676] rounded mb-2"></div>
              <p class="text-sm">Green 300</p>
              <p class="text-xs text-gray-500">#00e676</p>
            </div>
            <div class="text-center">
              <div class="w-24 h-24 bg-[#b9f6ca] rounded mb-2 border border-gray-200"></div>
              <p class="text-sm">Green 200</p>
              <p class="text-xs text-gray-500">#b9f6ca</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">Text Colors</h3>
          <div class="space-y-2">
            <p class="text-[#353f4f]">Text Primary (#353f4f)</p>
            <p class="text-[#6c757d]">Text Secondary (#6c757d)</p>
          </div>
        </div>
      </div>
    `,
  }),
}

export const CardsAndContainers: Story = {
  render: () => ({
    template: `
      <div class="space-y-6 p-8">
        <h2 class="text-2xl font-bold mb-6">Cards & Containers</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg border border-gray-200">
            <h3 class="text-xl font-semibold mb-2">Bordered Card</h3>
            <p>Card with border styling</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-2">Shadow Card</h3>
            <p>Card with shadow styling</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-2">Default Card</h3>
            <p>Simple card with padding</p>
          </div>
        </div>
      </div>
    `,
  }),
}

export const SpacingAndLayout: Story = {
  render: () => ({
    template: `
      <div class="space-y-6 p-8">
        <h2 class="text-2xl font-bold mb-6">Spacing & Layout</h2>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">Spacing Scale</h3>
          <div class="space-y-2">
            <div class="bg-blue-100 h-4 w-4 inline-block mr-2"></div>
            <span>4px (spacing-1)</span>
          </div>
          <div class="space-y-2">
            <div class="bg-blue-200 h-4 w-8 inline-block mr-2"></div>
            <span>8px (spacing-2)</span>
          </div>
          <div class="space-y-2">
            <div class="bg-blue-300 h-4 w-12 inline-block mr-2"></div>
            <span>12px (spacing-3)</span>
          </div>
          <div class="space-y-2">
            <div class="bg-blue-400 h-4 w-16 inline-block mr-2"></div>
            <span>16px (spacing-4)</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">Breakpoints</h3>
          <ul class="list-disc ml-6 space-y-1">
            <li>xsm: 414px</li>
            <li>sm: 480px</li>
            <li>md: 768px</li>
            <li>lg: 992px</li>
            <li>xl: 1200px</li>
            <li>xxl: 1400px</li>
          </ul>
        </div>
      </div>
    `,
  }),
}

