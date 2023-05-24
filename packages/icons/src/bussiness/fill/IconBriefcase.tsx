import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconBriefcase: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 5.5C10 5.224 10.224 5 10.5 5H13.5C13.776 5 14 5.224 14 5.5V7H10V5.5ZM7 21H17V7H16V5.5C16 4.122 14.878 3 13.5 3H10.5C9.122 3 8 4.122 8 5.5V7H7V21ZM19 7V21C20.654 21 22 19.654 22 18V10C22 8.346 20.654 7 19 7ZM2 10C2 8.346 3.346 7 5 7V21C3.346 21 2 19.654 2 18V10Z"
      fill={fill}
    />
  </svg>
);

IconBriefcase.defaultProps = {
  ...iconDefaultProps,
};

export default IconBriefcase;
