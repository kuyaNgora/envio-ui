import { foundations } from "@envio-ui/core";
import { TOASTER_WIDTH } from "../../components/modals/toast/internals";
import type { ComponentThemeConfig } from "../types";

const toastInner: ComponentThemeConfig = {
  baseStyle: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: TOASTER_WIDTH,
    p: "sm",
    textAlign: "left",
    bg: "white",
    boxShadow: foundations.shadows[3],
  },
};

const toastCloseButton: ComponentThemeConfig = {
  baseStyle: {
    margin: 0,
    padding: 0,
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    userSelect: "none",
    background: "none",
    textDecoration: "none",
    border: "1px solid transparent",
    borderRadius: 8,
    "&:disabled": {
      cursor: "not-allowed",
    },
    width: "18px",
    height: "18px",
    "> svg": {
      width: "16px",
      height: "16px",
    },
    "&:not(:disabled)": {
      color: "greydark05",
    },
  },
};

const toast = {
  toastInner,
  toastCloseButton,
};

export default toast;
