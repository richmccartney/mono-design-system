// .playroom/FrameComponent.tsx

import React, { FunctionComponent } from 'react';

const reset = `
  body {
    margin: 0;
  }
`;
const FrameComponent: FunctionComponent = ({ children }) => {
  return (
    <>
      <style type="text/css">{reset}</style>
      {children}
    </>
  );
};

export default FrameComponent;
