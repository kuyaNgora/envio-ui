import type { ComponentThemeConfig } from "../types";

const badge: ComponentThemeConfig = {
  propToScaleMap: [["variant", "variants"]],
  baseStyle: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#c5c7ca",
    overflow: "hidden",
    userSelect: "none",
    padding: "calc(0.25rem - 1px) 0.25rem",
    height: "1.25rem",
    border: "1px solid transparent",
    minWidth: "100px",
    lineHeight: 1,
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: "4px",
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
      "outline-primary": {
        backgroundColor:
          "rgba(var(--nvo-primary-rgb), var(--nvo-opacity-transparent))",
        color: "var(--nvo-primary)",
      },
      "outline-secondary": {
        backgroundColor:
          "rgba(var(--nvo-secondary-rgb), var(--nvo-opacity-transparent))",
        color: "var(--nvo-secondary)",
      },
      "outline-success": {
        backgroundColor:
          "rgba(var(--nvo-success-rgb), var(--nvo-opacity-transparent))",
        color: "var(--nvo-success)",
      },
      "outline-warning": {
        backgroundColor:
          "rgba(var(--nvo-warning-rgb), var(--nvo-opacity-transparent))",
        color: "var(--nvo-warning)",
      },
    },
  },
};

export default badge;
