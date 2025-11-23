import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'kube9 Design System',
  description: 'Vue components and design tokens based on martex-template',
  base: '/kube9-design/',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Design Tokens', link: '/tokens/' },
      { text: 'Showcase', link: '/showcase/' },
    ],
    
    sidebar: {
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Card', link: '/components/card' },
          ],
        },
      ],
      '/tokens/': [
        {
          text: 'Design Tokens',
          items: [
            { text: 'Colors', link: '/tokens/colors' },
            { text: 'Typography', link: '/tokens/typography' },
            { text: 'Spacing', link: '/tokens/spacing' },
          ],
        },
      ],
      '/showcase/': [
        {
          text: 'Showcase',
          items: [
            { text: 'Overview', link: '/showcase/' },
            { text: 'Buttons', link: '/showcase/buttons' },
            { text: 'Forms', link: '/showcase/forms' },
            { text: 'Typography', link: '/showcase/typography' },
          ],
        },
      ],
    },
  },
})

