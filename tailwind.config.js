/** @type {import('tailwindcss').Config} */
// kube9 Design System Tailwind Configuration
// Based on martex-template, using Tailwind v4

export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      // Fonts from martex-template
      fontFamily: {
        'rubik': ['Rubik', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      // Colors extracted from martex-template
      colors: {
        // Base colors
        white: '#ffffff',
        black: '#000000',
        // Text colors
        'text-primary': '#353f4f',
        'text-secondary': '#6c757d',
        // Blue variants from martex
        'blue-500': '#185abd',
        'blue-400': '#1680fb',
        'blue-300': '#3eb1ff',
        'blue-200': '#e3ebfe',
        'blue-100': '#1680fb',
        // Green variants
        'green-500': '#00a14e',
        'green-400': '#00c853',
        'green-300': '#00e676',
        'green-200': '#b9f6ca',
        'green-100': '#00c853',
        // Additional colors can be added as needed
      },
      // Breakpoints from martex-template
      screens: {
        'xsm': '414px',
        'sm': '480px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1400px',
      },
      // Spacing scale (can be extended from martex)
      spacing: {
        // Add custom spacing if needed
      },
    },
  },
  plugins: [],
}

