import { globalStyles } from '../src/configs/stitches.config'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  a11y: {
    config: {
      rules: [
        // Como no site vamos ter uma opção de alto contraste, não precisamos que por default os componentes tenham contraste validado.
        { id: 'color-contrast', enabled: false },
      ],
    },
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
