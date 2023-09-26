import type { ComponentThemeConfig } from "../types";

const textarea: ComponentThemeConfig = {
  baseStyle: {
    borderRadius: 2,
    p: "xs",
    fontSize: "14px",
    fontWeight: 600,
    minHeight: 40,
    border: "1px solid",
    flex: 1,
    flexGrow: 1,
    width: "100%",
    appearance: "none",

    "&::-webkit-scrollbar": {
      height: 4,
      width: 4,
      transition: `background .3s`,
    },
    "&::-webkit-scrollbar-corner": {
      background: "transparent",
    },

    "&::-webkit-scrollbar-thumb ": {
      borderRadius: 5,
      background: "#9fa0a3",
      cursor: "pointer",
    },

    "&::-webkit-scrollbar-track ": {
      background: "#e7e9ed",
    },

    '&[aria-invalid="false"]': {
      "&:not(:disabled)": {
        backgroundColor: "var(--nvo-white)",
        color: "var(--nvo-dark)",
        borderColor: "var(--nvo-button-default-border)",

        "&:hover": {
          borderColor: "var(--nvo-primary)",
          backgroundColor: `rgba(var(--nvo-button-primary-outline-rgb), var(--nvo-opacity-transparent))`,
        },

        "&:focus": {
          outline: "none",
          borderColor: "var(--nvo-primary)",
          boxShadow: `0 0 0 4px rgba(var(--nvo-button-primary-outline-rgb), var(--nvo-opacity-outline))`,
        },
      },
    },

    '&[aria-invalid="true"]': {
      "&:not(:disabled)": {
        backgroundColor: "var(--nvo-white)",
        color: "var(--nvo-danger)",
        borderColor: "var(--nvo-danger)",

        "&:hover": {
          borderColor: "var(--nvo-danger)",
          backgroundColor: `rgba(var(--nvo-danger-rgb), var(--nvo-opacity-transparent))`,
        },

        "&:focus": {
          outline: "none",
          borderColor: "var(--nvo-danger)",
          boxShadow: `0 0 0 4px rgba(var(--nvo-danger-rgb), var(--nvo-opacity-transparent))`,
        },
      },
    },

    "&:disabled": {
      border: "1px solid var(--nvo-gray-300)",
      backgroundColor: "var(--nvo-button-disabled-bg)",
      color: "var(--nvo-button-disabled-color)",
    },
  },
};

export default textarea;
