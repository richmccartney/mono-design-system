const colorTokens = require('../color.json');

describe('color tokens', () => {
  test(': matches snapshot', () => {
    expect(colorTokens).toMatchSnapshot();
  });
});
