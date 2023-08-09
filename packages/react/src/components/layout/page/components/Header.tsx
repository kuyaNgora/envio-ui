import React from "react";
import styled from "styled-components";
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

export interface HeaderProps
  extends SxProps,
    AllSystemProps,
    PseudoSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  sticky?: boolean;
}

const headerProps = ["sticky"];

const Header = styled("header").withConfig<HeaderProps>({
  shouldForwardProp: sfp(headerProps),
})(
  componentStylesMixin("pageHeader"),
  sxMixin,
  allSystemProps,
  pseudoSystemProps
);

export default Header;
