import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconLayout: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 8V6C21 4.346 19.654 3 18 3H6C4.346 3 3 4.346 3 6V8H21ZM3 10V18C3 19.654 4.346 21 6 21H11V10H3ZM13 21V10H21V18C21 19.654 19.654 21 18 21H13Z"
      fill={fill}
    />
  </svg>
);

IconLayout.defaultProps = {
  ...iconDefaultProps,
};

export default IconLayout;
