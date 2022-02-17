import React from 'react';
import { render } from '@testing-library/react';

import { Surface } from '..';
import { SurfaceProps } from '.';

describe('<Surface />', () => {
  const defaultProps: SurfaceProps = {
    testId: 'test-surface',
  };

  test(': matches snapshot', () => {
    const { container } = render(<Surface {...defaultProps} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
