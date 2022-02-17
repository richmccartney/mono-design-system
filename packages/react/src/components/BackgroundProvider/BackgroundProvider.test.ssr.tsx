import React from 'react';
import { renderToString } from 'react-dom/server';

import { BackgroundProvider } from '..';

describe('<BackgroundProvider /> Server-side rendering>', () => {
  test(': renders on a server without crashing', () => {
    const renderOnServer = () => renderToString(<BackgroundProvider />);
    expect(renderOnServer).not.toThrow();
  });
});
