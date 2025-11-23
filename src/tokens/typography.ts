/**
 * Typography tokens extracted from martex-template
 */

export const fontFamilies = {
  rubik: ['Rubik', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  jakarta: ['Plus Jakarta Sans', 'sans-serif'],
  inter: ['Inter', 'sans-serif'],
} as const

export type FontFamily = keyof typeof fontFamilies

export const fontSizes = {
  xs: '0.75rem',      // 12px
  sm: '0.875rem',     // 14px
  base: '1rem',       // 16px
  lg: '1.125rem',     // 18px
  xl: '1.25rem',      // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '1.875rem',  // 30px
  '4xl': '2.25rem',   // 36px
} as const

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const

export const lineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 1.6666, // From martex-template
} as const

export const typography = {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
} as const

