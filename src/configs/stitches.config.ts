import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        bluePrimaryLight: '#B5DBFF',
        onBluePrimaryLight: '#989797',

        bluePrimary: '#007CEF',
        onBluePrimary: '#FFFFFF',

        bluePrimaryDark: '#031C5A',
        onBluePrimaryDark: '#FFFFFF',

        yellowSystemLight: '#FFD656',
        onYellowSystemLight: '#4D5056',

        yellowSystem: '#FFCC2F',
        onYellowSystem: '#FFFFFF',

        yellowSystemDark: '#FFC100',
        onYellowSystemDark: '#FFFFFF',

        redSystemLight: '#FF6464',
        onRedSystemLight: '#4D5056',

        redSystem: '#FF3636',
        onRedSystem: '#FFFFFF',

        redSystemDark: '#FE0000',
        onRedSystemDark: '#FFFFFF',

        greenSystemLight: '#D2F45C',
        onGreenSystemLight: '#4D5056',

        greenSystem: '#BEE52E',
        onGreenSystem: '#FFFFFF',

        greenSystemDark: '#A8D900',
        onGreenSystemDark: '#FFFFFF',

        purpleSystemLight: '#BE7EFF',
        onPurpleSystemLight: '#4D5056',

        purpleSystem: '#A853FF',
        onPurpleSystem: '#FFFFFF',

        purpleSystemDark: '#9337F1',
        onPurpleSystemDark: '#FFFFFF',

        gradientBlueLightDark: 'linear-gradient(180deg, #007CEF 0%, #031C5A 132.95%)',
        onGradientBlueLightDark: '#FFFFFF',

        gradientBluePurple: 'linear-gradient(180deg, #007CEF -5.68%, #9337F1 100%)',
        onGradientBluePurple: '#FFFFFF',

        gradientYellowDarkLight: 'linear-gradient(180deg, #FFC100 0%, #FFD656 100%)',
        onGradientYellowDarkLight: '#FFFFFF',

        backgroundGrayLight: '#F4F4F4',
        onBackgroundGrayLight: '#525252',

        grayLight: '#ABB3BF',
        onGrayLight: '#FFFFFF',

        gray: '#4D5056',
        onGray: '#FFFFFF',

        grayDark: '#232222',
        onGrayDark: '#FFFFFF',
      },
      space: {
        sm1: '4px',
        sm2: '8px',
        md1: '12px',
        md2: '16px',
        md3: '20px',
        lg1: '24px',
        lg2: '28px',
      },
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
    lineHeight: 1,
  },

  ':root': {
    $h1: '30px',
    $h2: '24px',
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
})
