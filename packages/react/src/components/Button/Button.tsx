import React, {
  forwardRef, FunctionComponent, ReactNode
} from 'react';

type Ref = React.Ref<HTMLButtonElement>

interface ButtonProps {
  children: ReactNode
  id: string
}

const Button: FunctionComponent<ButtonProps> = forwardRef(
  (
    { children, id },
    ref: Ref
  ) => {
  return <button id={id} ref={ref}>{children}</button>
  }
)

export default Button;
