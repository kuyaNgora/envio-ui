import type { ComponentThemeConfig } from "../types";

const avatar: ComponentThemeConfig = {
  propToScaleMap: [["variant", "variants"]],
  baseStyle: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    border: "1px solid",
    borderColor: "var(--nvo-white)",
    verticalAlign: "middle",
    overflow: "hidden",
    userSelect: "none",
  },
  scales: {
    variants: {
      primary: {
        backgroundColor: "var(--nvo-primary)",
        color: "var(--nvo-white)",
      },
      secondary: {
        backgroundColor: "var(--nvo-secondary)",
        color: "var(--nvo-white)",
      },
      success: {
        backgroundColor: "var(--nvo-success)",
        color: "var(--nvo-white)",
      },
      warning: {
        backgroundColor: "var(--nvo-warning)",
        color: "var(--nvo-white)",
      },
    },
  },
};

export default avatar;
