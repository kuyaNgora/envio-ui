import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCopy: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 12V13H5.667C5.299 13 5 12.701 5 12.333V5.667C5 5.299 5.299 5 5.667 5H12.333C12.701 5 13 5.299 13 5.667V9H12C10.346 9 9 10.346 9 12ZM18 9H15V5.667C15 4.196 13.804 3 12.333 3H5.667C4.196 3 3 4.196 3 5.667V12.333C3 13.804 4.196 15 5.667 15H9V18C9 19.654 10.346 21 12 21H18C19.654 21 21 19.654 21 18V12C21 10.346 19.654 9 18 9Z"
      fill={fill}
    />
  </svg>
);

IconCopy.defaultProps = {
  ...iconDefaultProps,
};

export default IconCopy;
