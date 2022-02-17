export type ThemeVariant = 'mono' | 'chrome';
export type ScreenMode = 'light' | 'dark';

export interface ThemeProviderProps {
  /** Optional prop to specify the ID used for testing */
  testId?: string;

  /** Content to display inside ThemeProvider. */
  children?: React.ReactNode;

  /** Optional prop to specify classNames onto ThemeProvider */
  className?: string;

  screen: ScreenMode;

  /** Prop to specify the variant of the theme to use */
  theme: ThemeVariant;

  /** Any additional props can be added where needed */
  [props: string]: any;
}
