import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from '..';
import { ThemeProviderProps } from '.';

describe('<ThemeProvider />', () => {
  const defaultProps: ThemeProviderProps = {
    testId: 'test-themeprovider',
  };

  test(': matches snapshot', () => {
    const { container } = render(<ThemeProvider {...defaultProps} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
