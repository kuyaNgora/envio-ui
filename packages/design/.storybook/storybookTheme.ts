// Create custom theme
// https://storybook.js.org/docs/configurations/theming/

import { create } from "@storybook/theming/create";

const storybookTheme = create({
  base: "dark",
  brandTitle: "Envio UI",
});

export default storybookTheme;
