module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@whitespace/storybook-addon-html',
    'storybook-addon-jsx',
  ],
  stories: ['../src/**/*.stories.@(mdx|tsx)'],
};
