import { createStitches } from '@stitches/react'
import { colors } from './colors'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors,
      space: {},
      fontSizes: {
        h1: 'var(--h1)',
        h2: 'var(--h2)',
        h3: 'var(--h3)',
        h4: 'var(--h4)',
        body: 'var(--body)',
        small: 'var(--small)',
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
        xlg: '16px',
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
      paddingX: (value: number) => ({ paddingLeft: value, paddingRight: value }),
      paddingY: (value: number) => ({ paddingTop: value, paddingBottom: value }),
      svgFontSize: (value: number) => ({ fontSize: value + 8 }),
    },
  })

export const globalStyles = globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;500;700;900&display=swap')",
  ],

  '*': {
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    fontSize: '$body',
    fontFamily: '$sans',
    lineHeight: '1.36',
  },

  ':root': {
    $h1: '30px',
    $h2: '20px',
    $h3: '16px',
    $h4: '14px',
    $h5: '14px',
    $h6: '14px',
    $body: '12px',
    $small: '10px',

    '@md': {
      $h1: '48px',
      $h2: '36px',
      $h3: '24px',
      $h4: '20px',
      $h5: '20px',
      $h6: '20px',
      $body: '16px',
      $small: '12px',
    },
  },

  h1: {
    fontSize: '$h1',
  },

  h2: {
    fontSize: '$h2',
  },

  h3: {
    fontSize: '$h3',
  },

  h4: {
    fontSize: '$h4',
  },

  h5: {
    fontSize: '$h5',
  },

  h6: {
    fontSize: '$h6',
  },

  strong: {
    fontSize: 'inherit',
  },

  'input, textarea, select': {
    '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus': {
      '-webkit-box-shadow': '0 0 0px 1000px #fff inset',
    },
  },
})
