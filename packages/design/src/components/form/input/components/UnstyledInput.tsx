import styled from "styled-components";
import {
  AllSystemProps,
  PseudoSystemProps,
  SxProps,
  allSystemProps,
  componentStylesMixin,
  pseudoSystemProps,
  shouldForwardProp,
  sxMixin,
} from "../../../../system";

export interface UnstyledInputProps
  extends AllSystemProps,
    PseudoSystemProps,
    SxProps {
  color?: string;
}

const UnstyledInput = styled("input").withConfig<UnstyledInputProps>({
  shouldForwardProp,
})(componentStylesMixin("input"), sxMixin, allSystemProps, pseudoSystemProps);

UnstyledInput.displayName = "UnstyledInput";

export default UnstyledInput;
