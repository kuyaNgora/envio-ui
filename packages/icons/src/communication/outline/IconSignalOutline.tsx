import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconSignal: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 4C18.45 4 18 4.45 18 5V20C18 20.55 18.45 21 19 21C19.55 21 20 20.55 20 20V5C20 4.45 19.55 4 19 4ZM12 8C11.45 8 11 8.45 11 9V20C11 20.55 11.45 21 12 21C12.55 21 13 20.55 13 20V9C13 8.45 12.55 8 12 8ZM4 13C4 12.45 4.45 12 5 12C5.55 12 6 12.45 6 13V20C6 20.55 5.55 21 5 21C4.45 21 4 20.55 4 20V13Z"
      fill={fill}
    />
  </svg>
);

IconSignal.defaultProps = {
  ...iconDefaultProps,
};

export default IconSignal;
