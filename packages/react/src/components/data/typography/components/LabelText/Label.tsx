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

export type LabelTextScale = "lg" | "md" | "sm" | "xs";

export interface LabelTextProps<ThemeType extends Theme = RequiredTheme>
  extends SxProps,
    AllSystemProps,
    PseudoSystemProps {
  color?: string;
  children?: React.ReactNode;
  scale?: ResponsiveValue<LabelTextScale, ThemeType>;
}

const LabelText = styled("span").withConfig<LabelTextProps>({
  shouldForwardProp: sfp(textProps),
})(
  variant({
    prop: "scale",
    scale: "variants.text.label",
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

LabelText.defaultProps = {
  scale: "md",
  letterSpacing: "-0.05px",
};

LabelText.displayName = "LabelText";

export default LabelText;
