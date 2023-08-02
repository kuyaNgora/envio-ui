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

interface SliderThumbProps
  extends SliderPrimitive.SliderThumbProps,
    SxProps,
    PseudoSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
}

const SliderThumb = styled(SliderPrimitive.Thumb).withConfig<SliderThumbProps>({
  shouldForwardProp,
})(componentStylesMixin("sliderThumb"), sxMixin, pseudoSystemProps);

SliderThumb.displayName = "SliderThumb";
export default SliderThumb;
