const fontColorTokens = require('../font.json');

describe('Font color tokens', () => {
  test(': matches snapshot', () => {
    expect(fontColorTokens).toMatchSnapshot();
  });
});
