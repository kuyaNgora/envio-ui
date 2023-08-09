import { foundations } from "@envio-ui/core";
import hexRgb from "../../utils/hexToRgb";
import type { ComponentThemeConfig } from "../types";

const stepperContainer: ComponentThemeConfig = {
  baseStyle: ({
    activeColor,
    inactiveColor,
  }: {
    activeColor?: string;
    inactiveColor?: string;
  }) => ({
    "--nvo-border-list--active":
      (activeColor && hexRgb(activeColor)) ||
      hexRgb(foundations?.colors?.primary),
    "--nvo-border-list":
      (inactiveColor && hexRgb(inactiveColor)) || hexRgb("#848484"),
    display: "block",
    margin: 10,
    padding: 0,
  }),
};

const stepperList: ComponentThemeConfig = {
  baseStyle: {
    marginLeft: "1rem",
    listStyle: "none",
    minHeight: 50,
    borderLeft: "1px solid rgba(var(--nvo-border-list), 1)",
    padding: "0 0 20px 20px",
    position: "relative",
    fontSize: 16,
    lineHeight: 1,
    left: -6,
    "> .stepper__indicator": {
      position: "absolute",
      height: 10,
      width: 10,
      borderRadius: "100%",
      left: -4.5,
      top: 0,
      outline: "thick solid rgba(255,255,255, 1)",
      backgroundColor: "rgba(var(--nvo-border-list), 1)",
      transition: "all 500ms ease-in-out",
    },
    " > div": {
      "> .stepper__header": {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        fontWeight: 600,
        top: -4,
        position: "relative",
      },
      "> .stepper__content": {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 400,
      },
    },
    "&:first-child": {
      borderLeft: "1px solid rgba(var(--nvo-border-list--active), 1)",
      " > div > .stepper__header": {
        color: "rgba(var(--nvo-border-list--active), 1) !important",
        display: "flex",
      },

      "> .stepper__indicator": {
        backgroundColor: "rgba(var(--nvo-border-list--active), 1)",
        outline: "thick solid rgba(var(--nvo-border-list--active), 0.3)",
        left: -5.5,
        zIndex: 100,
        position: "absolute",

        "&::after": {
          content: "",
          display: "block",
          height: 10,
          width: 10,
          backgroundColor: "transparent",
          outline: "thick solid #fff",
          borderRadius: "100%",
        },
      },
    },

    "&:not(:first-child)": {
      " > div > .stepper__header": {
        color: "rgba(var(--nvo-border-list), 1) !important",
      },
      "> .stepper__indicator": {
        left: -5.5,
      },
    },

    "&:last-child": {
      borderLeft: "1px !important",
      "> .stepper__indicator": {
        left: -4.5,
      },
    },
  },
};

const stepper = {
  stepperContainer,
  stepperList,
};

export default stepper;
