import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconMonitor: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3H19C20.654 3 22 4.346 22 6V11H2V6C2 4.346 3.346 3 5 3ZM5 17C3.346 17 2 15.654 2 14V13H22V14C22 15.654 20.654 17 19 17H13V19H17C17.55 19 18 19.45 18 20C18 20.55 17.55 21 17 21H7C6.45 21 6 20.55 6 20C6 19.45 6.45 19 7 19H11V17H5Z"
      fill={fill}
    />
  </svg>
);

IconMonitor.defaultProps = {
  ...iconDefaultProps,
};

export default IconMonitor;
