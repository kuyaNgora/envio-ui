import type { ComponentThemeConfig } from "../types";

const navbar: ComponentThemeConfig = {
  propToScaleMap: [["theme", "themes"]],
  baseStyle: {
    display: "flex",
    alignItems: "center",
    flexWrap: "inherit",
    justifyContent: "space-between",
    width: "100%",
    "> .navbar-brand": {
      display: "block",
      height: "2rem",
      width: "auto",
      cursor: "pointer",
    },
    "> .navbar-nav": {
      m: 0,
      p: 0,
      alignItems: "stretch",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: "0.5rem",
      listStyleType: "none",
      "> .nav-item": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    },
  },
  scales: {
    themes: {
      light: {
        "--nvo-link-color": "rgba(32, 32, 32, 0.7)",
        "--nvo-link-hover-color": "#202020",
        "--nvo-link-disabled-color": "rgba(32, 32, 32, 0.3)",
      },
      dark: {
        "--nvo-link-color": "rgba(225, 225, 225, 0.7)",
        "--nvo-link-hover-color": "#ffffff",
        "--nvo-link-disabled-color": "rgba(225, 225, 225, 0.3)",
      },
    },
  },
};

export default navbar;
