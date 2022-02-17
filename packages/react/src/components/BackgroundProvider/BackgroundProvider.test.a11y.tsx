import React from 'react';
import { render } from '@testing-library/react';

import { BackgroundProvider } from '..';
import { BackgroundProviderProps } from '.';

import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('<BackgroundProvider />', () => {
  const defaultProps: BackgroundProviderProps = {
    testId: 'test-backgroundprovider',
  };

  test(': should not have basic accessibility issues', async () => {
    const { container } = render(<BackgroundProvider {...defaultProps} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
