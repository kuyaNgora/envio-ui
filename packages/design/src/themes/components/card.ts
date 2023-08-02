import type { ComponentThemeConfig } from "../types";

const card: ComponentThemeConfig = {
  propToScaleMap: [["elevation", "elevations"]],
  scales: {
    elevations: {
      1: {
        boxShadow: 0,
      },
      2: {
        boxShadow:
          "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
      },
      3: {
        boxShadow:
          "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
      },
      4: {
        boxShadow:
          "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
      },
    },
  },
};

export default card;
