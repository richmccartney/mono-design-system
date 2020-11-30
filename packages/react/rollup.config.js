import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const basePlugins = [external(), resolve(), commonjs()];
const postcssConfig = require('./postcss.config');

/**
 * We have multiple output configs to support CommonJS and ES modules.
 */
export default [
  // CommonJS
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },

    plugins: [
      ...basePlugins,
      postcss(postcssConfig),
      // We do this here because we are able to use `dir` for cjs, and
      // declaration exports require use of a dir. ES modules require a
      // file so that we can specify standard .es.js file extension.
      typescript({
        declaration: true,
        declarationDir: 'dist/types',
        exclude: [
          '**/__mocks__/**/*.ts',
          '**/__tests__/**/*.tsx',
          '**/*.test.tsx',
          '**/*.stories.tsx',
        ],
      }),
    ],
  },
  // ES Module
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      ...basePlugins,
      postcss({
        ...postcssConfig,
        extract: false, // We don't extract CSS for modules because we don't want index.es.css
        inject: false, // We don't want to inject any styles into the head of the page
      }),
      typescript(),
    ],
  },
];
