import classNames from 'classnames';
import React, { forwardRef, FunctionComponent, useContext } from 'react';
import { ButtonProps } from './Button.types';
import { BackgroundProviderContext } from '../BackgroundProvider';

import './Button.scss';

type Ref = React.Ref<HTMLButtonElement>;

/**
 * Use `Button` to allow users to take actions with clicks and taps.
 */
const Button: FunctionComponent<ButtonProps> = forwardRef(
  ({ children, id, isFullWidth, onClick }, ref: Ref) => {
    const { Background } = useContext(BackgroundProviderContext);
    const buttonClasses = classNames({
      'mono-Button': true,
      'mono-Button--isFullWidth': !!isFullWidth,
      'mono-Button--onPrimaryBackground': Background === 'light',
      'mono-Button--onSecondaryBackground': Background === 'dark',
      'mono-Button--onDarkBackground': Background === 'dark',
    });

    return (
      <button className={buttonClasses} id={id} ref={ref} onClick={onClick}>
        {children}
      </button>
    );
  }
);

export default Button;
