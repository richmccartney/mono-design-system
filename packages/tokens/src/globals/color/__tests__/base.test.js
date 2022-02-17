const baseColorTokens = require('../base.json');

describe('Base color tokens', () => {
  test(': matches snapshot', () => {
    expect(baseColorTokens).toMatchSnapshot();
  });
});
