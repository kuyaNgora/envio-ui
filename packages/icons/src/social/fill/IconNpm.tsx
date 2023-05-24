import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconNpm: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H13V11H17V21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
      fill={fill}
    />
  </svg>
);

IconNpm.defaultProps = {
  ...iconDefaultProps,
};

export default IconNpm;
