module.exports = {
  stories: ['../src/**/stories.@(js|jsx|ts|tsx|mdx)', '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    interactionsDebugger: true,
  },
  typescript: {
    // https://storybook.js.org/docs/react/configure/typescript
    // https://github.com/storybookjs/storybook/issues/12129#issuecomment-1138087474
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        return prop.parent
          ? /@radix-ui/.test(prop.parent.fileName) ||
              /react-select/.test(prop.parent.fileName) ||
              !/node_modules/.test(prop.parent.fileName)
          : true
      },
    },
  },
}
