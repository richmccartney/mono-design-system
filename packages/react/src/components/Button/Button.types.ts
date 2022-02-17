import React, { MouseEvent, ReactNode } from 'react';
export interface ButtonProps {
  children?: ReactNode;
  id?: string;
  isFullWidth?: boolean;
  /** Optionally specify Button onClick function */
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
