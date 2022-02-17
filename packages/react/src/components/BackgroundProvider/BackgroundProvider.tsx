/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { FunctionComponent, createContext } from 'react';
import type { BackgroundProviderProps } from '.';

const Context = createContext({ Background: '' });
const { Provider } = Context;

/**
 * Use `BackgroundProvider` to display components on different background colors.
 *
 * BackgroundProvider component.
 *
 * @component
 * @example
 * const background = 'dark'
 * return (
 *   <BackgroundProvider background={background}>...</BackgroundProvider>
 * )
 */
const BackgroundProvider: FunctionComponent<BackgroundProviderProps> = ({
  background = 'light',
  children,
}) => {
  return <Provider value={{ Background: background }}>{children}</Provider>;
};

export { Context as BackgroundProviderContext };
export default BackgroundProvider;
