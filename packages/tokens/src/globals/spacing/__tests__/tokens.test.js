const spacingTokens = require('../tokens.json');

describe('spacing tokens', () => {
  test(': matches snapshot', () => {
    expect(spacingTokens).toMatchSnapshot();
  });
});
