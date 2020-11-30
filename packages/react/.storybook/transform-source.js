import cheerio from 'cheerio';
import parserHtml from 'prettier/parser-html';
import prettier from 'prettier/standalone';
import ReactDomServer from 'react-dom/server';

/**
 * Renders a React component to HTML, and strips out any wrapping divs
 *
 * https://github.com/storybookjs/storybook/blob/v6.1.0-alpha.3/addons/docs/docs/recipes.md#customizing-source-snippets
 */
export default (_, storyContext) => {
  const staticMarkup = ReactDomServer.renderToStaticMarkup(
    storyContext.storyFn(storyContext.args)
  );

  const $ = cheerio.load(staticMarkup);

  // Replace example content
  $('.u-exampleContent').replaceWith('Example content');

  // Strip out any wrapping components
  const storyStaticMarkup = $('#story-wrapper > div').html();

  return prettier.format(storyStaticMarkup, {
    htmlWhitespaceSensitivity: 'ignore',
    parser: 'html',
    plugins: [parserHtml],
  });
};
