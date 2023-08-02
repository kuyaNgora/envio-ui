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

interface SliderTrackProps
  extends SliderPrimitive.SliderTrackProps,
    SxProps,
    PseudoSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
}

const SliderTrack = styled(SliderPrimitive.Track).withConfig<SliderTrackProps>({
  shouldForwardProp,
})(componentStylesMixin("sliderTrack"), sxMixin, pseudoSystemProps);

SliderTrack.displayName = "SliderTrack";
export default SliderTrack;
