import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconSquareCircle: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 14H14V10H10V14ZM16 14.75C16 15.439 15.439 16 14.75 16H9.25C8.561 16 8 15.439 8 14.75V9.25C8 8.561 8.561 8 9.25 8H14.75C15.439 8 16 8.561 16 9.25V14.75ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconSquareCircle.defaultProps = {
  ...iconDefaultProps,
};

export default IconSquareCircle;
