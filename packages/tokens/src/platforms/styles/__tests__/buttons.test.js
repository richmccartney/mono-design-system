const buttonTokens = require('../button.json');

describe('button tokens', () => {
  test(': matches snapshot', () => {
    expect(buttonTokens).toMatchSnapshot();
  });
});
