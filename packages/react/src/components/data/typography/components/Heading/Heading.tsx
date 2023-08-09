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

export type HeadingScale = "lg" | "md" | "sm" | "xs" | "xxs";
export interface HeadingProps<ThemeType extends Theme = RequiredTheme>
  extends AllSystemProps,
    SxProps {
  color?: string;
  children?: React.ReactNode;
  /** Size value of the heading. */
  scale?: ResponsiveValue<HeadingScale, ThemeType>;
}

const Heading = styled("h2").withConfig<HeadingProps>({
  shouldForwardProp: sfp(textProps),
})(
  variant({
    prop: "scale",
    scale: "variants.text.heading",
    variants: {
      xxs: {},
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

Heading.defaultProps = {
  color: "secondary",
  scale: "md",
};

Heading.displayName = "Heading";

export default Heading;
