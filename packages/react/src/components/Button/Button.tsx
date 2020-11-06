import React, {
  forwardRef
} from 'react';

const Button = forwardRef<HTMLButtonElement>(
  (
    { children },
    ref
  ) => {
  return <button ref={ref}>{children}</button>
  }
)

export default Button;
