export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: {
    // Set the initial theme
    current: 'dark',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
