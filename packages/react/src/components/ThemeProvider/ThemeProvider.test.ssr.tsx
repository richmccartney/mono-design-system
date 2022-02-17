import React from 'react';
import { renderToString } from 'react-dom/server';

import { ThemeProvider } from '..';

describe('<ThemeProvider /> Server-side rendering>', () => {
  test(': renders on a server without crashing', () => {
    const renderOnServer = () => renderToString(<ThemeProvider />);
    expect(renderOnServer).not.toThrow();
  });
});
