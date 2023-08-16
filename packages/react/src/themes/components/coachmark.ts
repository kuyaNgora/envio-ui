import type { ComponentThemeConfig } from "../types";

const base: ComponentThemeConfig = {
  baseStyle: {
    border: "1px solid var(--nvo-tooltip-black-transparent)",
    boxSizing: "border-box",
    position: "fixed",
    zIndex: 99998,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxShadow: "0 0 0 2000px var(--nvo-tooltip-black-transparent)",
    borderRadius: "var(--nvo-tooltip-move)",
    transition: "all 0.3s ease-out",
  },
};

const tip: ComponentThemeConfig = {
  baseStyle: {
    boxSizing: "content-box",
    position: "fixed",
    zIndex: 99999,
    padding: "1rem",
    borderRadius: "0.13rem",
    transition: "all 0.3s ease-out",
    maxWidth: "30rem",
    minWidth: "10rem",

    "&.coachmark__left": {
      background: "#fff",
      "&:before": {
        right: "var(--nvo-tooltip-shift)",
        top: "var(--nvo-tooltip-move)",
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
      },
    },

    "&.coachmark__bottom": {
      background: "#fff",
      "&::before": {
        content: "",
        top: "var(--nvo-tooltip-shift)",
        left: "var(--nvo-tooltip-move)",
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
      },
    },

    "&.coachmark__top": {
      background: "#fff",
      "&::before": {
        bottom: "var(--nvo-tooltip-shift)",
        left: "var(--nvo-tooltip-move)",
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
      },
    },

    "&.coachmark__right": {
      background: "#fff",
      "&::before": {
        left: "var(--nvo-tooltip-shift)",
        top: "var(--nvo-tooltip-move)",
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderBottomColor: "transparent",
      },
    },
  },
};

const coachmark = {
  coachbase: base,
  coachtip: tip,
};

export default coachmark;
