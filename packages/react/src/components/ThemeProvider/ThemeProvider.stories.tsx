import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThemeProvider, { ThemeProviderProps } from '.';
import mdx from './ThemeProvider.mdx';

export default {
  title: 'Components/ThemeProvider',
  args: { children: 'ThemeProvider' },
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: ThemeProvider,
} as Meta;

export const Default: Story<ThemeProviderProps> = (args) => (
  <ThemeProvider {...args} />
);
