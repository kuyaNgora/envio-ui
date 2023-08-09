import type { CSSObject, ComponentThemeConfig } from "../types";
import variants from "../variants";

const baseStyle: CSSObject = {
  margin: 0,
  padding: 0,
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  userSelect: "none",
  background: "none",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "16px",
  letterSpacing: "0.2px",
  border: "1px solid transparent",
  borderRadius: 2,
  "&:not(:disabled)": {
    backgroundColor: "var(--nvo-button-default-bg)",
    color: "var(--nvo-dark)",
    border: "1px solid var(--nvo-button-default-border)",
    "&:hover": {
      backgroundColor: `var(--nvo-button-default-bg-hover)`,
    },
    "&:active": {
      backgroundColor: "var(--nvo-button-default-bg-active)",
    },
    "&:visited": {
      outline: "none",
      boxShadow: `0 0 0 4px rgba(var(--nvo-button-outline-rgb), var(--nvo-opacity-outline))`,
    },
    "&:focus": {
      outline: "none",
      boxShadow: `0 0 0 4px rgba(var(--nvo-button-outline-rgb), var(--nvo-opacity-outline))`,
    },
  },
  "&:disabled": {
    border: "1px solid var(--nvo-button-disabled-bg)",
    backgroundColor: "var(--nvo-button-disabled-bg)",
    color: "var(--nvo-button-disabled-color)",
  },
};

export const buttonBase: ComponentThemeConfig = {
  baseStyle,
  propToScaleMap: [
    ["size", "sizes"],
    ["variant", "variants"],
    ["shape", "shapes"],
  ],
  scales: {
    sizes: {
      sm: {
        height: "32px",
        py: "xs",
        px: "xs",
      },
      md: {
        height: "40px",
        py: "sm",
        px: "sm",
      },
      lg: {
        height: "48px",
        py: "sm",
        px: "sm",
      },
    },
    variants: {
      ...variants.button,
    },
  },
};

export const iconButton: ComponentThemeConfig = {
  baseStyle,
  propToScaleMap: [
    ["size", "sizes"],
    ["variant", "variants"],
  ],
  scales: {
    sizes: {
      sm: {
        width: "24px",
        height: "24px",
        "> svg": {
          width: "16px",
          height: "16px",
        },
      },
      md: {
        width: "32px",
        height: "32px",
        "> svg": {
          width: "16px",
          height: "16px",
        },
      },
      lg: {
        width: "40px",
        height: "40px",
        "> svg": {
          width: "20px",
          height: "20px",
        },
      },
    },
    variants: {
      ...variants.button,
      "outline-destructive": {
        "&:not(:disabled)": {
          borderColor: "red07",
          color: "red07",
          "&:hover, &:focus": {
            backgroundColor: "rgba(255, 219, 214, 0.8)",
          },
        },
        "&:disabled": {
          borderColor: "var(--nvo-button-)",
          color: "greymed01",
        },
      },
      plain: ({ selected }: { selected?: boolean }) => ({
        "&:not(:disabled)": {
          color: selected ? "blue07" : "greydark02",
          borderColor: selected ? "blue07" : "transparent",
          backgroundColor: selected ? "blue01" : "transparent",
          "&:hover, &:focus": {
            backgroundColor: "greylight03",
          },
        },
        "&:disabled": {
          color: "greymed01",
        },
      }),
      "plain-destructive": {
        "&:not(:disabled)": {
          color: "red07",
          "&:hover": {
            backgroundColor: "red01",
          },
          "&:focus": {
            backgroundColor: "rgba(255, 219, 214, 0.8)",
          },
        },
        "&:disabled": {
          color: "greymed01",
        },
      },
    },
  },
};

export const plainButton: ComponentThemeConfig = {
  baseStyle: {
    ...baseStyle,
    py: "xxs",
    px: "xs",
    "> svg": {
      width: "16px",
      height: "16px",
    },
    "&:disabled": {
      color: "greymed01",
    },
  },
  propToScaleMap: [
    ["variant", "variants"],
    ["size", "sizes"],
  ],
  scales: {
    sizes: {
      sm: {
        fontSize: "14px",
        lineHeight: "22px",
      },
      md: {
        fontSize: "16px",
        lineHeight: "22px",
      },
    },
    variants: {
      primary: {
        "&:not(:disabled)": {
          color: "blue07",
          "&:hover": {
            color: "blue08",
            "> span": {
              textDecoration: "underline",
            },
          },
          "&:focus": {
            backgroundColor: "greylight03",
            color: "blue09",
            "> span": {
              textDecoration: "underline",
            },
          },
        },
      },
      disclosure: ({ selected }: { selected?: boolean }) => ({
        "&:not(:disabled)": {
          borderColor: selected ? "blue07" : "transparent",
          backgroundColor: selected ? "blue01" : "transparent",
          color: selected ? "blue07" : "greydark02",
          "&:hover": {
            color: "greydark02",
            "> span": {
              textDecoration: "underline",
            },
          },
          "&:focus": {
            backgroundColor: "greylight03",
            color: "greydark02",
            "> span": {
              textDecoration: "underline",
            },
          },
        },
      }),
      destructive: {
        "&:not(:disabled)": {
          color: "red07",
          "&:hover": {
            color: "red08",
            "> span": {
              textDecoration: "underline",
            },
          },
          "&:focus": {
            backgroundColor: "greylight03",
            color: "red09",
            "> span": {
              textDecoration: "underline",
            },
          },
        },
      },
    },
  },
};

export const unstyledButton: ComponentThemeConfig = {
  baseStyle: {
    width: "auto",
    margin: 0,
    padding: 0,
    border: "none",
    font: "inherit",
    color: "inherit",
    backgroundColor: "transparent",
    cursor: "pointer",

    // Normalizes line height & removes center align
    lineHeight: "normal",
    textAlign: "inherit",

    // Corrects font smoothing for webkit
    WebkitFontSmoothing: "inherit",
    MozOsxFontSmoothing: "inherit",

    // Corrects inability to style clickable \`input\` types in iOS
    WebkitAppearance: "none",

    // Remove excess padding and border in Firefox 4+
    "&::-moz-focus-inner": {
      border: 0,
      padding: 0,
    },
  },
};

const button = {
  buttonBase,
  iconButton,
  plainButton,
  unstyledButton,
};

export default button;
