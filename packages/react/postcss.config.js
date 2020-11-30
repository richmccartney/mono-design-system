module.exports = {
  extract: true,
  minimize: true,
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env'),
    require('postcss-custom-media'),
  ],
};
