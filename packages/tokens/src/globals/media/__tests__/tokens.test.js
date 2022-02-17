const mediaTokens = require('../tokens.json');

describe('media tokens', () => {
  test(': matches snapshot', () => {
    expect(mediaTokens).toMatchSnapshot();
  });
});
