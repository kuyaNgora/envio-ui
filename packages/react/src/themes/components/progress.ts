import type { ComponentThemeConfig } from "../types";
import hexRgb from "../../utils/hexToRgb";

const progressRoot: ComponentThemeConfig = {
  propToScaleMap: [["size", "sizes"]],
  baseStyle: ({ backgroundColor }: { backgroundColor?: string }) => ({
    "--nvo-progress-background":
      (backgroundColor && hexRgb(backgroundColor)) || hexRgb("#0973BB"),
    position: "relative",
    overflow: "hidden",
    borderRadius: 0,
    width: "100%",
    backgroundColor: "rgba(var(--nvo-progress-background), 0.16)",
    transform: "translateZ(0)",
  }),
  scales: {
    sizes: {
      sm: {
        height: 4,
      },
      md: {
        height: 8,
      },
      lg: {
        height: 12,
      },
    },
  },
};

const progressIndicator: ComponentThemeConfig = {
  baseStyle: ({ indicatorColor }: { indicatorColor?: string }) => ({
    "--nvo-progress-indicator":
      (indicatorColor && hexRgb(indicatorColor)) || hexRgb("#0973BB"),
    backgroundColor: "rgba(var(--nvo-progress-indicator), 1)",
    width: "100%",
    height: "100%",
    transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
  }),
};

const progress = {
  progressRoot,
  progressIndicator,
};

export default progress;
