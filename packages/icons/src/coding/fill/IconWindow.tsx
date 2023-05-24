import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconWindow: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 18C19 18.552 18.551 19 18 19H6C5.449 19 5 18.552 5 18V11H19V18ZM8 6C8.552 6 9 6.447 9 7C9 7.553 8.552 8 8 8C7.448 8 7 7.553 7 7C7 6.447 7.448 6 8 6ZM12 6C12.552 6 13 6.447 13 7C13 7.553 12.552 8 12 8C11.448 8 11 7.553 11 7C11 6.447 11.448 6 12 6ZM18 3H6C4.346 3 3 4.346 3 6V9V11V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V11V9V6C21 4.346 19.654 3 18 3Z"
      fill={fill}
    />
  </svg>
);

IconWindow.defaultProps = {
  ...iconDefaultProps,
};

export default IconWindow;
