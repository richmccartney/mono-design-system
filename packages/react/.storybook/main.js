module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@whitespace/storybook-addon-html',
  ],
  stories: ['../src/**/*.stories.@(mdx|tsx)'],
};
