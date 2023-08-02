import type { ComponentThemeConfig } from "../types";

const rounded: ComponentThemeConfig = {
  propToScaleMap: [["rounded", "rounded"]],
  scales: {
    rounded: {
      1: {
        borderRadius: 2,
      },
      2: {
        borderRadius: 4,
      },
      3: {
        borderRadius: 8,
      },
      circle: {
        borderRadius: "100%",
      },
    },
  },
};

export default rounded;
