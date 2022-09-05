import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        primary1: '#3C4C64',
        primary2: '#317BEB',
        primary3: 'rgba(49, 123, 235, 0.6)',

        secondary1: '#4B9FF4',
        secondary2: '#FFAF14',
        secondary3: '#3EB813',
        secondary4: '#FF001F',

        base1: '#979797',
        base2: '#D3D3D3',
        base3: '#83868C',
        base4: '#000000',
      },
      space: {
        sm1: '4px',
        sm2: '8px',
        sm3: '12px',
        md1: '16px',
        md2: '20px',
        md3: '24px',
        lg1: '32px',
        lg2: '40px',
        lg3: '48px',
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
      radii: {},
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
