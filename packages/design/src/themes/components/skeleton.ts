import { foundations } from "@envio-ui/core";
import type { ComponentThemeConfig } from "../types";

const skeleton: ComponentThemeConfig = {
  propToScaleMap: [["type", "types"]],
  baseStyle: {
    display: "block",
    position: "relative",
    overflow: "hidden",
    background: foundations.colors.greymed01,
    borderRadius: 4,
  },
  scales: {
    types: {
      line: {
        height: 20,
      },
      circle: {
        borderRadius: "100% !important",
      },
    },
  },
};

export default skeleton;
