import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconGridRound: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2C3.346 2 2 3.346 2 5C2 6.654 3.346 8 5 8C6.654 8 8 6.654 8 5C8 3.346 6.654 2 5 2ZM12 2C10.346 2 9 3.346 9 5C9 6.654 10.346 8 12 8C13.654 8 15 6.654 15 5C15 3.346 13.654 2 12 2ZM22 5C22 6.654 20.654 8 19 8C17.346 8 16 6.654 16 5C16 3.346 17.346 2 19 2C20.654 2 22 3.346 22 5ZM5 9C3.346 9 2 10.346 2 12C2 13.654 3.346 15 5 15C6.654 15 8 13.654 8 12C8 10.346 6.654 9 5 9ZM9 12C9 10.346 10.346 9 12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12ZM19 9C17.346 9 16 10.346 16 12C16 13.654 17.346 15 19 15C20.654 15 22 13.654 22 12C22 10.346 20.654 9 19 9ZM2 19C2 17.346 3.346 16 5 16C6.654 16 8 17.346 8 19C8 20.654 6.654 22 5 22C3.346 22 2 20.654 2 19ZM12 16C10.346 16 9 17.346 9 19C9 20.654 10.346 22 12 22C13.654 22 15 20.654 15 19C15 17.346 13.654 16 12 16ZM16 19C16 17.346 17.346 16 19 16C20.654 16 22 17.346 22 19C22 20.654 20.654 22 19 22C17.346 22 16 20.654 16 19Z"
      fill={fill}
    />
  </svg>
);

IconGridRound.defaultProps = {
  ...iconDefaultProps,
};

export default IconGridRound;
