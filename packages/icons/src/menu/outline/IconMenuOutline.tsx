import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconMenu: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.948 6H20.051C20.573 6 21 6.427 21 6.949V7.051C21 7.573 20.573 8 20.051 8H3.948C3.426 8 3 7.573 3 7.051V6.949C3 6.427 3.426 6 3.948 6ZM20.051 11H3.948C3.426 11 3 11.427 3 11.949V12.051C3 12.573 3.426 13 3.948 13H20.051C20.573 13 21 12.573 21 12.051V11.949C21 11.427 20.573 11 20.051 11ZM20.051 16H3.948C3.426 16 3 16.427 3 16.949V17.051C3 17.573 3.426 18 3.948 18H20.051C20.573 18 21 17.573 21 17.051V16.949C21 16.427 20.573 16 20.051 16Z"
      fill={fill}
    />
  </svg>
);

IconMenu.defaultProps = {
  ...iconDefaultProps,
};

export default IconMenu;
