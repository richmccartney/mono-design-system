import React from 'react';
import { renderToString } from 'react-dom/server';

import { Surface } from '..';

describe('<Surface /> Server-side rendering>', () => {
  test(': renders on a server without crashing', () => {
    const renderOnServer = () => renderToString(<Surface />);
    expect(renderOnServer).not.toThrow();
  });
});
