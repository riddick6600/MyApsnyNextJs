import type { Preview } from "@storybook/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../src/app/normalize.css";
import "../src/app/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
