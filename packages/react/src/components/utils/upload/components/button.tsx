import styled from "styled-components";
import {
  AllSystemProps,
  PseudoSystemProps,
  SxProps,
  allSystemProps,
  pseudoSystemProps,
  shouldForwardProp,
  sxMixin,
} from "../../../../system";

export interface UnstyledButtonUploadProps
  extends AllSystemProps,
    PseudoSystemProps,
    SxProps {
  /**
   * Extended color props. We need this because default `color` prop clashes with `styled-system`.
   */
  color?: string;
}

const UnstyledButtonUpload = styled(
  "div"
).withConfig<UnstyledButtonUploadProps>({
  shouldForwardProp,
})(sxMixin, allSystemProps, pseudoSystemProps);

UnstyledButtonUpload.displayName = "UnstyledButtonUpload";

export default UnstyledButtonUpload;
