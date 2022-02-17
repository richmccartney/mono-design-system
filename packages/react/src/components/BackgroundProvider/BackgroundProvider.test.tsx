import React from 'react';
import { render } from '@testing-library/react';

import { BackgroundProvider } from '..';
import { BackgroundProviderProps } from '.';

describe('<BackgroundProvider />', () => {
  const defaultProps: BackgroundProviderProps = {
    testId: 'test-backgroundprovider',
  };

  test(': matches snapshot', () => {
    const { container } = render(<BackgroundProvider {...defaultProps} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
