const fontTokens = require('../tokens.json');

describe('font tokens', () => {
  test(': matches snapshot', () => {
    expect(fontTokens).toMatchSnapshot();
  });
});
