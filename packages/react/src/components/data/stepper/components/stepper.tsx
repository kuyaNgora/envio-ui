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
import Content from "./content";

export interface StepperProps
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

const Stepper = styled("ul").withConfig<StepperProps>({
  shouldForwardProp: sfp(props),
})(
  componentStylesMixin("stepperContainer"),
  sxMixin,
  allSystemProps,
  pseudoSystemProps
);

Stepper.displayName = "Stepper";

export default Object.assign(Stepper, {
  Item: Content,
});
