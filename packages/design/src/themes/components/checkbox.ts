import { foundations } from "@envio-ui/core";
import type { ComponentThemeConfig } from "../types";

const inputCheckbox: ComponentThemeConfig = {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    "> .root": {
      backgroundColor: foundations.colors.greylight03,
      width: 20,
      height: 20,
    },
  },
};

const inputLabel: ComponentThemeConfig = {
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

const checkbox = {
  inputCheckbox,
  inputLabel,
};

export default checkbox;
