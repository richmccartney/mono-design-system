const package = require('./package.json');

const exampleCode = `
  <h1>Hello World</h1>
`;

module.exports = {
  title: `Mono design system - Playroom`,
  components: './src/components/index.ts',
  outputPath: `./build/playroom/${package.version}`,
  frameComponent: './.playroom/FrameComponent.tsx',
  snippets: './src/components/snippets.ts',
  widths: [375, 768, 1024, 1280, 1440],
  port: 1973,
  openBrowser: true,
  exampleCode: exampleCode,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: __dirname,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
            },
          },
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: __dirname,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: __dirname,
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.css', '.scss'],
      modules: ['node_modules'],
    },
  }),
};
