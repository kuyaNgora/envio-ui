import type { ComponentThemeConfig } from "../types";

/** Anchor size values mapped by scale token. */
const anchor: ComponentThemeConfig = {
  baseStyle: {
    color: "#649dd1",
    "&:hover": {
      color: "#4d8fca",
      textDecoration: "underline",
    },
    "&:focus": {
      color: "#4d8fca",
      textDecoration: "underline",
    },
  },
};

const unstyledAnchor: ComponentThemeConfig = {
  baseStyle: {
    fontStyle: "inherit",
    color: "inherit",
    backgroundColor: "transparent",
    fontSize: "inherit",
    textDecoration: "none",
    fontVariant: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
    fontFamily: "inherit",
    borderRadius: "inherit",
    border: "inherit",
    outline: "inherit",
    boxShadow: "inherit",
    "&:hover, &:focus, &:active": {
      fontStyle: "inherit",
      color: "inherit",
      backgroundColor: "transparent",
      fontSize: "inherit",
      textDecoration: "none",
      fontVariant: "inherit",
      fontWeight: "inherit",
      lineHeight: "inherit",
      fontFamily: "inherit",
      borderRadius: "inherit",
      border: "inherit",
      outline: "inherit",
      boxShadow: "inherit",
    },
  },
};

const typography = {
  anchor,
  unstyledAnchor,
};

export default typography;
