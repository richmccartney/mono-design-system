import React from 'react';
import { Meta, Story } from '@storybook/react';
import BackgroundProvider, { BackgroundProviderProps } from '.';
import mdx from './BackgroundProvider.mdx';

export default {
  title: 'Components/BackgroundProvider',
  args: { children: 'BackgroundProvider' },
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: BackgroundProvider,
} as Meta;

export const Default: Story<BackgroundProviderProps> = (args) => (
  <BackgroundProvider {...args} />
);
