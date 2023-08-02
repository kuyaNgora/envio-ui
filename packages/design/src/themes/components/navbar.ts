import type { DefaultTheme } from "styled-components";
import type { ComponentThemeConfig } from "../types";

const navbar: ComponentThemeConfig = {
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
};

const link: ComponentThemeConfig = {
  baseStyle: ({
    active,
    disabled,
  }: {
    theme: DefaultTheme;
    active?: boolean;
    disabled?: boolean;
  }) => ({
    "--env-nav-link-active": "rgba(248,249,250,.06)",
    color: active ? "#fff" : "hsla(0,0%,100%,.7)",
    backgroundColor: disabled
      ? "transparent"
      : active
      ? "var(--env-nav-link-active)"
      : "transparent",
    borderRadius: 4,
    minHeight: "2rem",
    minWidth: "2rem",
    position: "relative",
    display: "flex",
    justifyContent: "stretch",
    alignItems: "center",
    px: "0.75rem",
    cursor: disabled ? "not-allowed" : "pointer",
    "> div > svg": {
      mr: "0.3rem",
    },
    ...(!disabled
      ? {
          "&:hover": {
            color: "#fff",
            textDecoration: "none",
          },
        }
      : {
          "&:hover": {
            color: "hsla(0,0%,100%,.7)",
            textDecoration: "none",
          },
        }),
  }),
};

const nav = {
  navbar,
  link,
};

export default nav;
