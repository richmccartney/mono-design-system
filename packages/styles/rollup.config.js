import postcss from "rollup-plugin-postcss";

const postcssConfig = require("./postcss.config.js");

export default [
  {
    input: "src/style.scss",
    output: {
      file: "dist/style.css",
      format: "es",
    },
    plugins: [postcss(postcssConfig)],
  },
];
