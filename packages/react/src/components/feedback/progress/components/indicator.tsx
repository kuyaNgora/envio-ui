import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import styled from "styled-components";
import {
  componentStylesMixin,
  PseudoSystemProps,
  pseudoSystemProps,
  sxMixin,
  SxProps,
  sfp,
} from "../../../../system";

interface ProgressIndicatorProps
  extends ProgressPrimitive.ProgressIndicatorProps,
    SxProps,
    PseudoSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  indicatorColor?: string;
}

const props = ["indicatorColor"];

const ProgressIndicator = styled(
  ProgressPrimitive.Indicator
).withConfig<ProgressIndicatorProps>({
  shouldForwardProp: sfp(props),
})(componentStylesMixin("progressIndicator"), sxMixin, pseudoSystemProps);

ProgressIndicator.displayName = "ProgressIndicator";
export default ProgressIndicator;
