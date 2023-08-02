import React from "react";
import styled from "styled-components";
import { RequiredTheme, ResponsiveValue, Theme, variant } from "styled-system";
import {
  AllSystemProps,
  SxProps,
  allSystemProps,
  pseudoSystemProps,
  sfp,
  sxMixin,
} from "../../../../../system";
import { textProps } from "../../utils";

export type DisplayScale = "lg" | "md" | "sm" | "xs";

export interface DisplayProps<ThemeType extends Theme = RequiredTheme>
  extends AllSystemProps,
    SxProps {
  color?: string;
  children?: React.ReactNode;
  /** Size value of the Display. */
  scale?: ResponsiveValue<DisplayScale, ThemeType>;
}

/**
 * Link component provided as a styled component primitive.
 */
const Display = styled("h1").withConfig<DisplayProps>({
  shouldForwardProp: sfp(textProps),
})(
  variant({
    prop: "scale",
    scale: "variants.text.display",
    variants: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
    },
  }),
  allSystemProps,
  pseudoSystemProps,
  sxMixin
);

Display.defaultProps = {
  color: "secondary",
  scale: "md",
};

Display.displayName = "Display";

export default Display;
