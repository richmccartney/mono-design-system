import classNames from 'classnames';
import React, { forwardRef, FunctionComponent } from 'react';
import { ButtonProps } from './Button.types';

import styles from './Button.scss';

type Ref = React.Ref<HTMLButtonElement>;

/**
 * Use `Button` to allow users to take actions with clicks and taps.
 */
const Button: FunctionComponent<ButtonProps> = forwardRef(
  ({ children, id }, ref: Ref) => {
    const buttonClasses = classNames({
      [styles.Button]: true,
    });

    return (
      <button className={buttonClasses} id={id} ref={ref}>
        {children}
      </button>
    );
  }
);

export default Button;
