import type { ComponentThemeConfig } from "../types";

const switchRoot: ComponentThemeConfig = {
  baseStyle: {
    all: "unset",
    borderRadius: 999,
    position: "relative",
    width: 42,
    height: 25,
    border: 1,
    borderColor: "#E7E9ED",
    borderStyle: "solid",

    "&:not(:disabled)": {
      cursor: "pointer",
      backgroundColor: "#F4F6FA",
      "&:hover": {
        boxShadow: "0 0 0 1px var(--nvo-primary)",
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(var(--nvo-button-primary-outline-rgb), var(--nvo-opacity-outline))`,
      },
      "&[data-state='checked']": {
        backgroundColor: "var(--nvo-primary)",
        borderColor: "var(--nvo-primary)",
      },
    },

    "&:disabled": {
      cursor: "not-allowed",
      backgroundColor: "#F4F6FA",
    },
  },
};

const switchThumb: ComponentThemeConfig = {
  baseStyle: {
    display: "block",
    height: 21,
    width: 21,
    backgroundColor: "var(--nvo-white)",
    borderRadius: 999,
    transition: "transform 100ms",
    transform: "translateX(2px)",
    willChange: "transform",

    "&[data-state='checked']": {
      transform: "translateX(19px)",
    },

    "&[data-disabled]": {
      backgroundColor: "#D2D2D2",
    },
  },
};

const switchLabel: ComponentThemeConfig = {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
    "-webkit-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    userSelect: "none",
    width: "max-content",
  },
};

const switchStyle = {
  switchRoot,
  switchLabel,
  switchThumb,
};

export default switchStyle;
