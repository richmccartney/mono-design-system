const shadowTokens = require('../tokens.json');

describe('shadow tokens', () => {
  test(': matches snapshot', () => {
    expect(shadowTokens).toMatchSnapshot();
  });
});
