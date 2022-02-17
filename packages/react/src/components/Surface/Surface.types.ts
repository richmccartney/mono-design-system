import React, { HTMLAttributes } from 'react';

export type Backgrounds = 'primary' | 'secondary' | 'gray' | 'white' | 'dark';

export interface SurfaceProps extends HTMLAttributes<HTMLElement> {
  /** Content to display inside Surface. */
  children: any;

  /** Optional prop to specify classNames onto the Surface */
  className?: string;

  /** Option prop to specify the Element type */
  as?: React.ElementType;

  /**
   * Optional prop to specify the `background` of the Surface?
   */
  background?: Backgrounds;

  /** Optional prop to specify the ID used for testing */
  testId?: string;

  /** Any additional props can be added where needed */
  [props: string]: any;
}
