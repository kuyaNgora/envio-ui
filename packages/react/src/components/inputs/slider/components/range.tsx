import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import styled from "styled-components";
import {
  componentStylesMixin,
  PseudoSystemProps,
  pseudoSystemProps,
  sxMixin,
  SxProps,
  shouldForwardProp,
} from "../../../../system";

interface SliderRangeProps
  extends SliderPrimitive.SliderRangeProps,
    SxProps,
    PseudoSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
}

const SliderRange = styled(SliderPrimitive.Range).withConfig<SliderRangeProps>({
  shouldForwardProp,
})(componentStylesMixin("sliderRange"), sxMixin, pseudoSystemProps);

SliderRange.displayName = "SliderRange";
export default SliderRange;
