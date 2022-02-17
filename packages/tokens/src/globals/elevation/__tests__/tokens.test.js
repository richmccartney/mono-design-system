const motionTokens = require('../tokens.json');

describe('elevation tokens', () => {
  test(': matches snapshot', () => {
    expect(motionTokens).toMatchSnapshot();
  });
});
