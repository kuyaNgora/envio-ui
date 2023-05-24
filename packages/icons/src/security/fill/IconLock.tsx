import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconLock: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 14C11.448 14 11 14.448 11 15C11 15.552 11.448 16 12 16C12.552 16 13 15.552 13 15C13 14.448 12.552 14 12 14ZM12 18C10.346 18 9 16.654 9 15C9 13.346 10.346 12 12 12C13.654 12 15 13.346 15 15C15 16.654 13.654 18 12 18ZM10 6.111C10 4.947 10.897 4 12 4C13.103 4 14 4.947 14 6.111V8H10V6.111ZM17 8H16V6.111C16 3.845 14.206 2 12 2C9.794 2 8 3.845 8 6.111V8H7C5.346 8 4 9.346 4 11V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V11C20 9.346 18.654 8 17 8Z"
      fill={fill}
    />
  </svg>
);

IconLock.defaultProps = {
  ...iconDefaultProps,
};

export default IconLock;
