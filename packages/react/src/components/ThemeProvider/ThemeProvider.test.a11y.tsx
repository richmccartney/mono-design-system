import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from '..';
import { ThemeProviderProps } from '.';

import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('<ThemeProvider />', () => {
  const defaultProps: ThemeProviderProps = {
    testId: 'test-themeprovider',
  };

  test(': should not have basic accessibility issues', async () => {
    const { container } = render(<ThemeProvider {...defaultProps} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
