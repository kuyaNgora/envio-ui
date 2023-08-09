import { foundations } from "@envio-ui/core";
import type { ComponentThemeConfig } from "../types";

const popoverContent: ComponentThemeConfig = {
  baseStyle: {
    "--popover-border": foundations.colors.greylight01,
    "--popover-background": foundations.colors.greylight01,
    backgroundColor: "var(--popover-background)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "var(--popover-border)",
    borderRadius: 12,
    boxShadow: 4,
    zIndex: 1000,
  },
};

const popover = {
  popoverContent,
};

export default popover;
