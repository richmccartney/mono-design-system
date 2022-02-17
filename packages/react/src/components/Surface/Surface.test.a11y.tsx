import React from 'react';
import { render } from '@testing-library/react';

import { Surface } from '..';
import { SurfaceProps } from '.';

import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('<Surface />', () => {
  const defaultProps: SurfaceProps = {
    testId: 'test-surface',
  };

  test(': should not have basic accessibility issues', async () => {
    const { container } = render(<Surface {...defaultProps} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
