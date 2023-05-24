import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconAward: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4C14.206 4 16 5.794 16 8C16 10.206 14.206 12 12 12C9.79399 12 7.99999 10.206 7.99999 8C7.99999 5.794 9.79399 4 12 4ZM18.969 20.751L16.66 11.772C17.496 10.74 18 9.429 18 8C18 4.691 15.309 2 12 2C8.69099 2 5.99999 4.691 5.99999 8C5.99999 9.429 6.50399 10.74 7.33999 11.772L5.03099 20.751C4.93099 21.143 5.07499 21.556 5.39799 21.799C5.72099 22.042 6.15799 22.064 6.50599 21.862L11.836 18.733L17.516 21.875C17.667 21.959 17.834 22 18 22C18.217 22 18.433 21.93 18.612 21.791C18.928 21.547 19.068 21.138 18.969 20.751Z"
      fill={fill}
    />
  </svg>
);

IconAward.defaultProps = {
  ...iconDefaultProps,
};

export default IconAward;
