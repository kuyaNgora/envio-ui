import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import styled from "styled-components";
import {
  componentStylesMixin,
  PseudoSystemProps,
  pseudoSystemProps,
  sxMixin,
  SxProps,
  shouldForwardProp,
} from "../../../../system";

interface SwitchThumbProps
  extends SwitchPrimitive.SwitchProps,
    SxProps,
    PseudoSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
}

const SwitchThumb = styled(SwitchPrimitive.Thumb).withConfig<SwitchThumbProps>({
  shouldForwardProp,
})(componentStylesMixin("switchThumb"), sxMixin, pseudoSystemProps);

SwitchThumb.displayName = "SwitchThumb";
export default SwitchThumb;
