/**
 * Color tokens extracted from martex-template
 * These are the base colors used throughout the design system
 */

export const colors = {
  // Base colors
  white: '#ffffff',
  black: '#000000',
  
  // Text colors
  textPrimary: '#353f4f',
  textSecondary: '#6c757d',
  
  // Blue variants (from martex-template)
  blue500: '#185abd',
  blue400: '#1680fb',
  blue300: '#3eb1ff',
  blue200: '#e3ebfe',
  blue100: '#1680fb',
  
  // Green variants
  green500: '#00a14e',
  green400: '#00c853',
  green300: '#00e676',
  green200: '#b9f6ca',
  green100: '#00c853',
  
  // Additional colors can be added as needed
} as const

export type ColorName = keyof typeof colors

/**
 * Get color value by name
 */
export function getColor(name: ColorName): string {
  return colors[name]
}

/**
 * Color palette for different use cases
 */
export const colorPalette = {
  primary: {
    main: colors.blue400,
    dark: colors.blue500,
    light: colors.blue300,
  },
  secondary: {
    main: colors.green400,
    dark: colors.green500,
    light: colors.green300,
  },
  text: {
    primary: colors.textPrimary,
    secondary: colors.textSecondary,
  },
} as const

