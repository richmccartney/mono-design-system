module.exports = {
  extends: [
    require.resolve('stylelint-config-standard'),
    require.resolve('stylelint-config-recommended-scss'),
    require.resolve('stylelint-config-suitcss'),
  ],
  plugins: [
    require.resolve('stylelint-scss'),
    require.resolve('stylelint-selector-bem-pattern'),
  ],
  rules: {
    'at-rule-no-unknown': true,
    'scss/at-rule-no-unknown': true,
    'no-eol-whitespace': null,
    'string-quotes': 'single',
    'plugin/selector-bem-pattern': {
      preset: 'suit',
      componentName: '[A-Z]+',
      componentSelectors: {
        initial:
          '^\\.{componentName}(?:-[a-zA-Z0-9]+)?(?:--[a-zA-Z0-9]+)?(?:.is-[a-zA-Z0-9]+)?(?:.has-[a-zA-Z0-9]+)?$',
      },
      utilitySelectors: '^\\.u-[a-zA-Z0-9]+$',
    },
  },
};
