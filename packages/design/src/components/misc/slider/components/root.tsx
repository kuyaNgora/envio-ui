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

interface SliderRootProps
  extends SliderPrimitive.SliderProps,
    SxProps,
    PseudoSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
}

const SliderRoot = styled(SliderPrimitive.Root).withConfig<SliderRootProps>({
  shouldForwardProp,
})(componentStylesMixin("sliderRoot"), sxMixin, pseudoSystemProps);

SliderRoot.displayName = "SliderRoot";
export default SliderRoot;
