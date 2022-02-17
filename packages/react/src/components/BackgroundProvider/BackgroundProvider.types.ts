export type BackgroundVariant = 'dark' | 'light' | undefined;

export interface BackgroundProviderProps {
  /**
   * Background variant to be composed into the BackgroundProvider.
   */
  background?: BackgroundVariant;

  /**
   * Content to display on the BackgroundProvider.
   */
  children: any;
}
