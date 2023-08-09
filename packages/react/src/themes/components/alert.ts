import type { ComponentThemeConfig } from "../types";

const alert: ComponentThemeConfig = {
  propToScaleMap: [["variant", "variants"]],
  baseStyle: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    verticalAlign: "top",
    overflow: "hidden",
    borderRadius: 4,
    p: "sm",
  },
  scales: {
    variants: {
      default: {
        border: "1px solid var(--nvo-white)",
        color: "var(--nvo-dark)",
      },
      primary: {
        border: "1px solid",
        borderColor: "var(--nvo-primary)",
        backgroundColor:
          "rgba(var(--nvo-primary-rgb), var(--nvo-opacity-transparent))",
        color: "var(--nvo-dark)",
      },
      danger: {
        border: "1px solid",
        borderColor: "var(--nvo-danger)",
        backgroundColor:
          "rgba(var(--nvo-danger-rgb), var(--nvo-opacity-transparent))",
        color: "var(--nvo-dark)",
      },
      success: {
        border: "1px solid",
        borderColor: "var(--nvo-success)",
        backgroundColor:
          "rgba(var(--nvo-success-rgb), var(--nvo-opacity-transparent))",
        color: "var(--nvo-dark)",
      },
      warning: {
        border: "1px solid",
        borderColor: "var(--nvo-warning)",
        backgroundColor:
          "rgba(var(--nvo-warning-rgb), var(--nvo-opacity-transparent))",
        color: "var(--nvo-dark)",
      },
    },
  },
};

export default alert;
