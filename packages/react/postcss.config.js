module.exports = {
  extract: true,
  minimize: true,
  parser: 'postcss-scss',
  syntax: require('postcss-scss'),
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env'),
    require('postcss-custom-media'),
  ],
};
