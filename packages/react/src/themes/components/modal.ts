import type { ComponentThemeConfig } from "../types";

const modalHeader: ComponentThemeConfig = {
  baseStyle: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    px: "md",
    backgroundColor: "#F4F6FA",
  },
  propToScaleMap: [["size", "sizes"]],
  scales: {
    sizes: {
      sm: {
        height: 57,
      },
      lg: {
        height: 72,
      },
    },
  },
};

const modalFooter: ComponentThemeConfig = {
  baseStyle: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    px: "md",
    backgroundColor: "#F4F6FA",
  },
  propToScaleMap: [["size", "sizes"]],
  scales: {
    sizes: {
      sm: {
        height: 57,
      },
      lg: {
        height: 72,
      },
    },
  },
};

const modal = {
  modalHeader,
  modalFooter,
};

export default modal;
