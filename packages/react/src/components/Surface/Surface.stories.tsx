import React from 'react';
import { Meta, Story } from '@storybook/react';
import Surface, { SurfaceProps } from '.';
import mdx from './Surface.mdx';

export default {
  title: 'Components/Surface',
  args: { children: 'Surface' },
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Surface,
} as Meta;

export const Default: Story<SurfaceProps> = (args) => <Surface {...args} />;
