import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconNavigationUp: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 21.0003C19.808 21.0003 19.616 20.9453 19.448 20.8343L12.552 16.2673C12.217 16.0453 11.783 16.0453 11.448 16.2673L4.55198 20.8343C4.17398 21.0833 3.67598 21.0493 3.33698 20.7493C2.99798 20.4483 2.90298 19.9583 3.10498 19.5533L11.105 3.55326C11.474 2.81526 12.526 2.81526 12.895 3.55326L20.895 19.5533C21.097 19.9583 21.002 20.4483 20.663 20.7493C20.475 20.9153 20.238 21.0003 20 21.0003Z"
      fill={fill}
    />
  </svg>
);

IconNavigationUp.defaultProps = {
  ...iconDefaultProps,
};

export default IconNavigationUp;
