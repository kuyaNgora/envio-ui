import React from "react";
import styled from "styled-components";
import { variant } from "styled-system";
import {
  allSystemProps,
  AllSystemProps,
  componentStylesMixin,
  pseudoSystemProps,
  PseudoSystemProps,
  sfp,
  sxMixin,
  SxProps,
} from "../../../../system";

export interface ContainerProps
  extends SxProps,
    AllSystemProps,
    PseudoSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /** Additional CSS properties to add to the component. */
  wrapper?: string;
  type?: "navbar" | "section";
}
const containerProps = ["wrapper", "type"];

const Container = styled("div").withConfig<ContainerProps>({
  shouldForwardProp: sfp(containerProps),
})(
  componentStylesMixin("container"),
  variant({
    prop: "wrapper",
    scale: "componentStyles.container.scales.sizes",
    variants: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },
  }),
  variant({
    prop: "type",
    scale: "componentStyles.container.scales.types",
    variants: {
      navbar: {},
      section: {},
    },
  }),
  sxMixin,
  allSystemProps,
  pseudoSystemProps
);

Container.defaultProps = {
  wrapper: "md",
  type: "section",
};

export default Container;
