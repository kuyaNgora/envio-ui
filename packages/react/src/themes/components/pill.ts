import type { ComponentThemeConfig } from "../types";

const pill: ComponentThemeConfig = {
  baseStyle: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    fontSize: 300,
    fontWeight: 400,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
  },
  propToScaleMap: [
    ["size", "sizes"],
    ["variant", "variants"],
    ["buttonVariant", "buttonVariants"],
  ],
  scales: {
    sizes: {
      sm: {
        px: "sm",
        py: "xxs",
        fontSize: 300,
      },
      md: {
        px: "sm",
        py: "xs",
        fontSize: 300,
      },
      lg: {
        px: "md",
        py: "sm",
        fontSize: 300,
      },
    },
    variants: {
      default: {
        backgroundColor: "green03",
        color: "grey08",
        borderColor: "green03",
      },
      neutral: {
        backgroundColor: "indigo01",
        color: "grey08",
        borderColor: "indigo03",
      },
      info: {
        backgroundColor: "blue03",
        color: "grey08",
        borderColor: "blue03",
      },
      warning: {
        backgroundColor: "yellow03",
        color: "grey08",
      },
      critical: {
        backgroundColor: "red03",
        color: "grey08",
        borderColor: "red03",
      },
      success: {
        backgroundColor: "green03",
        color: "grey08",
        borderColor: "green03",
      },
    },
    buttonVariants: {
      neutral: {
        borderRightWidth: "1px",
        borderRightStyle: "solid",
        borderRightColor: "indigo03",
      },
    },
  },
};

export default pill;
