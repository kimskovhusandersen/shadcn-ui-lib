import type { Preview } from "@storybook/react";
import "../src/index.css";
// .storybook/preview.js

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "centered",
    tags: ["autodocs"],
  },
};

export default preview;
