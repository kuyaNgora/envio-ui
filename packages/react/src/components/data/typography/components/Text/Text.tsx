import React from "react";
import styled from "styled-components";
import { RequiredTheme, ResponsiveValue, Theme, variant } from "styled-system";
import {
  AllSystemProps,
  PseudoSystemProps,
  SxProps,
  allSystemProps,
  pseudoSystemProps,
  sfp,
  sxMixin,
} from "../../../../../system";
import { textProps } from "../../utils";

export type TextScale = "lg" | "md" | "sm" | "xs";

export interface TextProps<ThemeType extends Theme = RequiredTheme>
  extends SxProps,
    AllSystemProps,
    PseudoSystemProps {
  color?: string;
  children?: React.ReactNode;
  scale?: ResponsiveValue<TextScale, ThemeType>;
}

const Text = styled("span").withConfig<TextProps>({
  shouldForwardProp: sfp(textProps),
})(
  variant({
    prop: "scale",
    scale: "variants.text.text",
    variants: {
      lg: {},
      md: {},
      sm: {},
      xs: {},
    },
  }),
  allSystemProps,
  pseudoSystemProps,
  sxMixin
);

Text.displayName = "Text";

export default Text;
