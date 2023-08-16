import type { ComponentThemeConfig } from "../types";

const tabRoot: ComponentThemeConfig = {};

const tabHeader: ComponentThemeConfig = {
  baseStyle: {
    all: "unset",
    flexShrink: 0,
    display: "flex",
    borderBottom: "1px solid var(--nvo-gray-200)",
    backgroundColor: "var(--nvo-white)",
  },
};

const tabTrigger: ComponentThemeConfig = {
  baseStyle: {
    all: "unset",
    fontFamily: "inherit",
    backgroundColor: "var(--nvo-white)",
    padding: "0 16px",
    height: "3rem",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    lineHeight: 1,
    color: "var(--nvo-gray-700)",
    userSelect: "none",

    "&:hover": {
      color: "var(--nvo-primary)",
      cursor: "pointer",
    },

    "&[data-state='active']": {
      backgroundColor: "rgba(var(--nvo-primary-rgb), 0.1)",
      color: "var(--nvo-dark)",
      fontWeight: 600,
      boxShadow: `inset 0 -1px 0 0 var(--nvo-primary), 0 1px 0 0 var(--nvo-primary)`,
    },
  },
};

const tabContent: ComponentThemeConfig = {
  baseStyle: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "var(--nvo-white)",
    outline: "none",
  },
};

const tabs = {
  tabRoot,
  tabContent,
  tabHeader,
  tabTrigger,
};

export default tabs;
