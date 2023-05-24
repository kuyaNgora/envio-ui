import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconUnlock: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 16C11.448 16 11 15.552 11 15C11 14.448 11.448 14 12 14C12.552 14 13 14.448 13 15C13 15.552 12.552 16 12 16ZM12 12C10.346 12 9 13.346 9 15C9 16.654 10.346 18 12 18C13.654 18 15 16.654 15 15C15 13.346 13.654 12 12 12ZM18 19C18 19.552 17.552 20 17 20H7C6.448 20 6 19.552 6 19V11C6 10.448 6.448 10 7 10H17C17.552 10 18 10.448 18 11V19ZM17 8H10V6C10 4.897 10.897 4 12 4C13.103 4 14 4.897 14 6C14 6.553 14.447 7 15 7C15.553 7 16 6.553 16 6C16 3.794 14.206 2 12 2C9.794 2 8 3.794 8 6V8H7C5.346 8 4 9.346 4 11V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V11C20 9.346 18.654 8 17 8Z"
      fill={fill}
    />
  </svg>
);

IconUnlock.defaultProps = {
  ...iconDefaultProps,
};

export default IconUnlock;
