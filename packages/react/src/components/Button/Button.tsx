import React, { forwardRef, FunctionComponent, ReactNode } from 'react';

type Ref = React.Ref<HTMLButtonElement>;

export interface ButtonProps {
  children?: ReactNode;
  id?: string;
}

/**
 * Use `Button` to allow users to take actions with clicks and taps.
 */
const Button: FunctionComponent<ButtonProps> = forwardRef(
  ({ children, id }, ref: Ref) => {
    return (
      <button id={id} ref={ref}>
        {children}
      </button>
    );
  }
);

export default Button;
