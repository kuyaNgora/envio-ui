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

interface ProgressRootProps
  extends ProgressPrimitive.ProgressProps,
    SxProps,
    PseudoSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  backgroundColor?: string;
}

const props = ["backgroundColor"];

const ProgressRoot = styled(
  ProgressPrimitive.Root
).withConfig<ProgressRootProps>({
  shouldForwardProp: sfp(props),
})(componentStylesMixin("progressRoot"), sxMixin, pseudoSystemProps);

ProgressRoot.displayName = "ProgressRoot";
export default ProgressRoot;
