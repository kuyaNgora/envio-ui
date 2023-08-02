import React from "react";
import styled from "styled-components";
import { RequiredTheme, ResponsiveValue, Theme, variant } from "styled-system";
import {
  AllSystemProps,
  SxProps,
  allSystemProps,
  componentStylesMixin,
  pseudoSystemProps,
  sfp,
  sxMixin,
} from "../../../../../system";
import { textProps } from "../../utils";

export type AnchorScale = "lg" | "md" | "sm" | "xs";

export interface AnchorProps<ThemeType extends Theme = RequiredTheme>
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    AllSystemProps,
    SxProps {
  color?: string;
  children?: React.ReactNode;
  /** Size value of the anchor. */
  scale?: ResponsiveValue<AnchorScale, ThemeType>;
}

/**
 * Link component provided as a styled component primitive.
 */
const Anchor = styled("a").withConfig<AnchorProps>({
  shouldForwardProp: sfp(textProps),
})(
  componentStylesMixin("anchor"),
  variant({
    prop: "scale",
    scale: "variants.text.text",
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

Anchor.displayName = "Anchor";

export default Anchor;
