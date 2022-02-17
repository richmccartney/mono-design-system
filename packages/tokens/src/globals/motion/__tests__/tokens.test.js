const motionTokens = require('../tokens.json');

describe('motion tokens', () => {
  test(': matches snapshot', () => {
    expect(motionTokens).toMatchSnapshot();
  });
});
