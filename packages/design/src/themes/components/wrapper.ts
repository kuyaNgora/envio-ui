import { foundations } from "@envio-ui/core";
import type { DefaultTheme } from "styled-components";
import type { ComponentThemeConfig } from "../types";

const page: ComponentThemeConfig = {
  baseStyle: {
    display: "flex",
    flex: "1 1",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
};

const pageHeader: ComponentThemeConfig = {
  baseStyle: ({
    sticky,
  }: {
    theme: DefaultTheme;
    sticky?: boolean;
  }) => ({
    "--nvo-navbar-bg": "var(--nvo-secondary)",
    "--nvo-navbar-color": "var(--nvo-white)",
    background: "var(--nvo-navbar-bg)",
    color: "var(--nvo-navbar-color)",
    minHeight: "3.5rem",
    alignItems: "stretch",
    justifyContent: "center",
    display: "flex",
    ...(sticky && {
      position: "sticky",
      top: 0,
      zIndex: 1020,
    }),
  }),
};

const container: ComponentThemeConfig = {
  propToScaleMap: [["size", "sizes"]],
  baseStyle: {
    width: "100%",
    px: "2rem",
  },
  scales: {
    sizes: {
      xs: {
        maxWidth: foundations.breakpoints[0],
      },
      sm: {
        maxWidth: foundations.breakpoints[1],
      },
      md: {
        maxWidth: foundations.breakpoints[2],
      },
      lg: {
        maxWidth: foundations.breakpoints[3],
      },
      xl: {
        maxWidth: foundations.breakpoints[4],
      },
    },
  },
};

const wrapper = {
  page,
  pageHeader,
  container,
};

export default wrapper;
