import React from "react";
import styled from "styled-components";
import {
  allSystemProps,
  AllSystemProps,
  componentStylesMixin,
  pseudoSystemProps,
  PseudoSystemProps,
  shouldForwardProp,
  sxMixin,
  SxProps,
} from "../../../../system";

export interface HeaderProps
  extends SxProps,
    AllSystemProps,
    PseudoSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
}

const Body = styled("body").withConfig<HeaderProps>({
  shouldForwardProp,
})(
  componentStylesMixin("pageBody"),
  sxMixin,
  allSystemProps,
  pseudoSystemProps
);

export default Body;
