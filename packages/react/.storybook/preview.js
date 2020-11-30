import { withHTML } from "@whitespace/storybook-addon-html/react";
import transformSource from "./transform-source";

export const decorators = [withHTML];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    source: {
      /*
       * 'code' to render the HTML output (from transfromSource ↓)
       * 'dynamic' to render the component JSX
       */
      type: "dynamic",
    },
    transformSource,
  },
  options: {
    storySort: {
      order: ["Default"],
    },
  },
};
