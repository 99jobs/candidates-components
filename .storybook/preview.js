import { globalStyles } from '../src/configs/stitches.config'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
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
}

globalStyles()
