import type { ComponentThemeConfig } from "../types";

const drawer: ComponentThemeConfig = {
  propToScaleMap: [["placement", "placements"]],
  baseStyle: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    maxWidth: "100%",
    verticalAlign: "middle",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    opacity: 0,
    outline: "none",
    transition: `opacity, transform 400ms cubic-bezier(0.1, 0.6, 0.1, 1)`,

    "> .top, .bottom": {
      width: "100%",
      height: "auto",
    },
    "> .left, .right": {
      width: "auto",
      height: "100%",
    },

    "> .hide-tab": {
      outline: "none",
      overflow: "hidden",
      width: 0,
      height: 0,
      opacity: 0,
    },
  },
  scales: {
    placements: {
      top: {
        bottom: "auto",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      },
      left: {
        right: "auto",
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
      bottom: {
        top: "auto",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
      right: {
        left: "auto",
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  },
};

export default drawer;
