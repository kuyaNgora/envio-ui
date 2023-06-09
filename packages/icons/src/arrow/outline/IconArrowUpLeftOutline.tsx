import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowUpLeft: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.707 16.293L9.418 8.004L15.001 8C15.553 8 16 7.551 16 6.999C16 6.447 15.552 6 15 6H14.999L7.049 6.006C6.499 6.007 6.054 6.451 6.05 7L6 14.994C5.996 15.546 6.441 15.997 6.994 16H7C7.55 16 7.996 15.556 8 15.006L8.035 9.449L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z"
      fill={fill}
    />
  </svg>
);

IconArrowUpLeft.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowUpLeft;
