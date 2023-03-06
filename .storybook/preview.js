import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { globalStyles } from '../src/configs/stitches.config'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    hideNoControlsWarning: true,
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    config: {
      rules: [
        // Como no site vamos ter uma opção de alto contraste, não precisamos que por default os componentes tenham contraste validado.
        { id: 'color-contrast', enabled: false },
      ],
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone5',
  },
}

export const argTypes = {
  css: {
    table: {
      disable: true,
    },
  },
  ref: {
    table: {
      disable: true,
    },
  },
}

globalStyles()
