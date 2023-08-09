import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconDot: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0C4.477 0 0 4.478 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.478 15.523 0 10 0Z"
      fill={fill}
    />
  </svg>
);

IconDot.defaultProps = {
  ...iconDefaultProps,
};

export default IconDot;
