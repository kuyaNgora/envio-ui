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

export interface ListProps extends SxProps, AllSystemProps, PseudoSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
}

const listProps = ["activeColor", "inactiveColor"];

const List = styled("li").withConfig<ListProps>({
  shouldForwardProp: sfp(listProps),
})(
  componentStylesMixin("stepperList"),
  sxMixin,
  allSystemProps,
  pseudoSystemProps
);

List.displayName = "StepperList";
export default List;
