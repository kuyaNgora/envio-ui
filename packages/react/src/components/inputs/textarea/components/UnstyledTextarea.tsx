import React from "react";
import styled from "styled-components";

import {
  AllSystemProps,
  SxProps,
  allSystemProps,
  componentStylesMixin,
  shouldForwardProp,
  sxMixin,
} from "../../../../system";

export interface UnstyledTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    AllSystemProps,
    SxProps {
  color?: string;
}

const UnstyledTextarea = styled("textarea").withConfig<UnstyledTextareaProps>({
  shouldForwardProp,
})(componentStylesMixin("textarea"), sxMixin, allSystemProps);

UnstyledTextarea.displayName = "UnstyledTextarea";

export default UnstyledTextarea;
