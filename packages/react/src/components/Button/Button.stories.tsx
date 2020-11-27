// Button.stories.js

import React from 'react';
import { Story } from "@storybook/react";
import Button, { ButtonProps } from './Button';
import mdx from './Button.mdx';

export default {
  title: 'Components/Button',
  args: { children: "Button" },
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Button,
};
export const Basic: Story<ButtonProps> = args => <Button {...args} />;
