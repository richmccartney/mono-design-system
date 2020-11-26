// Button.stories.js

import React from 'react';
import Button from './Button';
import mdx from './Button.mdx';

export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Button,
};
export const basic = () => <Button>Basic</Button>;
