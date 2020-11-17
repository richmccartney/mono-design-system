import React, {
  forwardRef
} from 'react';

const Button = forwardRef(
  (
    { children, id },
    ref
  ) => {
  return <button id={id} ref={ref}>{children}</button>
  }
)

export default Button;
