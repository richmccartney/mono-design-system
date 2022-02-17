/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import type { SurfaceProps } from '.';
import { BackgroundProvider } from '..';

import './Surface.scss';

/**
 * Use `Surface` to display content on different colour backgrounds.
 *
 * @component
 * @example
 * const background = 'navy'
 * return (
 *   <Surface background={background}>
 *     <div>Hello World!</div>
 *   </Surface>
 * )
 */
const Surface: FunctionComponent<SurfaceProps> = ({
  children,
  className,
  background,
  as: ElementTag = 'div',
  testId,
  ...props
}) => {
  const surfaceClasses = classNames({
    'mono-Surface': true,
    'mono-Surface--backgroundPrimary': background === 'primary',
    'mono-Surface--backgroundSecondary': background === 'secondary',
    'mono-Surface--backgroundWhite': background === 'white',
    'mono-Surface--backgroundDark': background === 'dark',
    'mono-Surface--backgroundGray': background === 'gray',
    [`${className}`]: className,
  });

  const commonProps = {
    className: surfaceClasses,
    'data-testid': testId,
  };

  const surfaceBackground =
    background === 'dark' || background === 'secondary' || background === 'gray'
      ? 'dark'
      : 'light';

  return (
    <BackgroundProvider background={surfaceBackground}>
      <ElementTag {...commonProps} {...props}>
        {children}
      </ElementTag>
    </BackgroundProvider>
  );
};

export default Surface;
