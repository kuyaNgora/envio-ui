import React from "react";
import styled from "styled-components";
import {
  allSystemProps,
  AllSystemProps,
  componentStylesMixin,
  PseudoSystemProps,
  pseudoSystemProps,
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
  activeColor?: string;
  inactiveColor?: string;
}

const props = ["activeColor", "inactiveColor"];

const Container = styled("ul").withConfig<ContainerProps>({
  shouldForwardProp: sfp(props),
})(
  componentStylesMixin("stepperContainer"),
  sxMixin,
  allSystemProps,
  pseudoSystemProps
);

Container.displayName = "StepperContainer";
export default Container;
