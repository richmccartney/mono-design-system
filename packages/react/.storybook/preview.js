import { withHTML } from '@whitespace/storybook-addon-html/react';

import React from 'react';
import { ThemeProvider } from '../src/components';

export const StoryWrapper = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

export const decorators = [StoryWrapper, withHTML];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    source: {
      type: 'dynamic',
    },
  },
  options: {
    storySort: {
      order: ['Default'],
    },
  },
};
