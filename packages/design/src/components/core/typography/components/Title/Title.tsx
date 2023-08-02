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

export type TitleScale = "lg" | "md" | "sm" | "xs";

export interface TitleProps<ThemeType extends Theme = RequiredTheme>
  extends SxProps,
    AllSystemProps,
    PseudoSystemProps {
  color?: string;
  children?: React.ReactNode;
  scale?: ResponsiveValue<TitleScale, ThemeType>;
}

const Title = styled("h3").withConfig<TitleProps>({
  shouldForwardProp: sfp(textProps),
})(
  variant({
    prop: "scale",
    scale: "variants.text.title",
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

Title.displayName = "Title";

export default Title;
