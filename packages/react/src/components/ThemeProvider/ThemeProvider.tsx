/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import type { ThemeProviderProps } from '.';

import './ThemeProvider.scss';

const MonoTheme = React.lazy(() => import('./themes/MonoTheme'));
const ChromeTheme = React.lazy(() => import('./themes/ChromeTheme'));

/**
 * ThemeProvider component.
 *
 * @component
 * @example
 * return (
 *   <ThemeProvider />
 * )
 */

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  testId,
  children,
  className,
  screen = 'light',
  theme = 'mono',
  ...props
}) => {
  const themeproviderClasses = classNames({
    'mono-ThemeProvider': true,
    'mono-ThemeProvider--mono': theme === 'mono',
    'mono-ThemeProvider--chrome': theme === 'chrome',
    [`${className}`]: className,
  });
  const commonProps = {
    className: themeproviderClasses,
    'data-testid': testId,
    'data-color-scheme': screen,
  };
  return (
    <>
      <React.Suspense fallback={<></>}>
        {theme === 'mono' && <MonoTheme />}
        {theme === 'chrome' && <ChromeTheme />}
      </React.Suspense>
      <div {...commonProps} {...props}>
        {children}
      </div>
    </>
  );
};

export default ThemeProvider;
