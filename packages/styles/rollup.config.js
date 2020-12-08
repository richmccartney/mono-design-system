import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

const postcssConfig = require('./postcss.config.js');

export default [
  {
    input: 'src/style.scss',
    output: {
      file: 'dist/css/style.css',
      format: 'es',
    },
    plugins: [
      postcss(postcssConfig),
      copy({
        targets: [{ src: 'src/*', dest: 'dist/scss' }],
      }),
    ],
  },
];
