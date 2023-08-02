import type { ComponentThemeConfig } from "../types";

const modalHeader: ComponentThemeConfig = {
  baseStyle: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    px: "md",
    backgroundColor: "greylight01",
  },
  propToScaleMap: [["size", "sizes"]],
  scales: {
    sizes: {
      sm: {
        height: "57px",
      },
      lg: {
        height: "72px",
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
    backgroundColor: "greylight01",
  },
  propToScaleMap: [["size", "sizes"]],
  scales: {
    sizes: {
      sm: {
        height: "48px",
      },
      md: {
        height: "56px",
      },
      lg: {
        height: "72px",
      },
    },
  },
};

const modal = {
  modalHeader,
  modalFooter,
};

export default modal;
