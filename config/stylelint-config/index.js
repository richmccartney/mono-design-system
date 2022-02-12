module.exports = {
  extends: [
    require.resolve('stylelint-config-standard'),
    require.resolve('stylelint-config-suitcss'),
    require.resolve('stylelint-config-prettier'),
  ],
  plugins: [
    require.resolve('stylelint-selector-bem-pattern'),
    require.resolve('stylelint-prettier'),
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'for',
          'text-transform',
          'define-mixin',
        ],
      },
    ],
    'function-whitespace-after': null,
    'no-eol-whitespace': null,
    'string-quotes': 'single',
    'prettier/prettier': true,
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
      },
    ],
    'plugin/selector-bem-pattern': {
      preset: 'suit',
      presetOptions: { namespace: 'mono' },
      componentName: '[A-Z]+',
      componentSelectors: {
        initial:
          '^\\.mono-{componentName}(?:-[a-zA-Z0-9]+)?(?:--[a-zA-Z0-9]+)?(?:.is-[a-zA-Z0-9]+)?(?:.has-[a-zA-Z0-9]+)?$',
        combined: '^.+$',
      },
      utilitySelectors: '^\\.u-[a-zA-Z0-9]+$',
    },
  },
};
