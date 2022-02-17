const gridTokens = require('../tokens.json');

describe('grid tokens', () => {
  test(': matches snapshot', () => {
    expect(gridTokens).toMatchSnapshot();
  });
});
