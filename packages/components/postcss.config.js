module.exports = {
  modules: false,
  extract: true,
  syntax: require("postcss-scss"),
  plugins: [
    require("postcss-reporter")({ clearReportedMessages: true }),
    require("postcss-bem-linter")("suit"),
    require("autoprefixer"),
  ],
};
