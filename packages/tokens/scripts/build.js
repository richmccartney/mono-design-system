/* eslint-disable no-console */
const StyleDictionaryPackage = require('style-dictionary');

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(brand, platform) {
  return {
    source: [
      `src/brands/${brand}/*.json`,
      'src/globals/**/*.json',
      `src/platforms/${platform}/*.json`,
    ],
    platforms: {
      styles: {
        transforms: [
          'attribute/cti',
          'name/cti/kebab',
          'time/seconds',
          'content/icon',
          'color/css',
        ],
        buildPath: `dist/web/${brand}/`,
        files: [
          {
            destination: 'css/tokens.css',
            format: 'css/variables',
            options: { showFileHeader: false },
          },
          {
            destination: 'scss/tokens.scss',
            format: 'scss/variables',
            options: { showFileHeader: false },
          },
          {
            destination: 'less/tokens.less',
            format: 'less/variables',
            options: { showFileHeader: false },
          },
        ],
      },
      js: {
        transforms: ['attribute/cti', 'name/cti/pascal', 'color/hex'],
        buildPath: `dist/web/${brand}/`,
        files: [
          {
            destination: 'js/module/index.js',
            format: 'javascript/module',
            options: { showFileHeader: false },
          },
          {
            destination: 'js/object/index.js',
            format: 'javascript/object',
            options: { showFileHeader: false },
          },
          {
            destination: 'js/umd/index.js',
            format: 'javascript/umd',
            options: { showFileHeader: false },
          },
          {
            destination: 'js/es6/index.js',
            format: 'javascript/es6',
            options: { showFileHeader: false },
          },
          {
            destination: 'json/tokens.json',
            format: 'json',
            options: { showFileHeader: false },
          },
        ],
      },
      android: {
        transformGroup: 'android',
        buildPath: `dist/android/${brand}/`,
        files: [
          {
            destination: 'tokens.colors.xml',
            format: 'android/colors',
          },
          {
            destination: 'tokens.dimens.xml',
            format: 'android/dimens',
          },
          {
            destination: 'tokens.font_dimens.xml',
            format: 'android/fontDimens',
          },
        ],
      },
      ios: {
        transforms: ['attribute/cti', 'name/cti/camel', 'color/UIColorSwift'],
        buildPath: `dist/ios/${brand}/`,
        files: [
          {
            destination: 'tokens.h',
            format: 'ios/macros',
          },
          {
            destination: 'tokens.swift',
            format: 'ios-swift/class.swift',
          },
        ],
      },
    },
  };
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

['mono'].map(function (brand) {
  ['styles', 'js', 'ios', 'android'].map(function (platform) {
    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(
      getStyleDictionaryConfig(brand, platform)
    );

    StyleDictionary.buildPlatform(platform);

    console.log('\nEnd processing');
  });
});

console.log('\n==============================================');
console.log('\nBuild completed!');
