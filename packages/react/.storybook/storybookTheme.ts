// Create custom theme
// https://storybook.js.org/docs/configurations/theming/

import { create } from "@storybook/theming/create";

const storybookTheme = create({
  base: "dark",
  brandTitle: "Envio UI",
  brandImage: 'https://envio.co.id/static/media/logo.64687ddcab57889e138f.png'
});

export default storybookTheme;
