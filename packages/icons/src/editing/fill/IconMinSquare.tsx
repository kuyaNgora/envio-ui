import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconMinSquare: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
      fill={fill}
    />
  </svg>
);

IconMinSquare.defaultProps = {
  ...iconDefaultProps,
};

export default IconMinSquare;
