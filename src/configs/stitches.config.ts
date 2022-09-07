import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        primary: '#1B2BC4',
        onPrimary: '#ffffff',
        primaryHover: '#101DA3',
        primaryDisabled: '#1C3255',

        secondary: '#163E93',
        onSecondary: '#ffffff',
        secondaryHover: '#163E93',
        secondaryDisabled: '#163E93',

        tertiary: '#772C88',
        onTertiary: '#ffffff',
        tertiaryHover: '#772C88',
        tertiaryDisabled: '#772C88',

        success: '#166441',
        onSuccess: '#ffffff',
        successHover: '#166441',
        successDisabled: '#166441',

        error: '#DE2102',
        onError: '#ffffff',
        errorHover: '#DE2102',
        errorDisabled: '#DE2102',

        background: '#ffffff',
        onBackground: '#3C4C64',
      },
      space: {
        sm1: '6px',
        sm2: '10px',
        sm3: '14px',
      },
      fontSizes: {
        h1: '30px',
        h2: '24px',
        h3: '16px',
        sub: '14px',
        body: '12px',
      },
      fonts: {
        sans: 'Noto Sans, sans-serif',
      },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {
        sm: '6px',
        md: '8px',
        lg: '10px',
      },
      shadows: {},
      zIndices: {},
      transitions: {},
    },
    media: {
      sm: '(min-width: 360px)',
      md: '(min-width: 600px)',
      lg: '(min-width: 1240px)',
      xl: '(min-width: 1360px)',
      xxl: '(min-width: 1600px)',
      xxxl: '(min-width: 1920px)',
    },
    utils: {
      marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
      marginY: (value: number) => ({ marginTop: value, marginBottom: value }),
    },
  })

export const globalStyles = globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;500;700;900&display=swap')",
  ],
  '*': {
    margin: 0,
    padding: 0,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.sans,
    boxSizing: 'border-box',
  },
})
