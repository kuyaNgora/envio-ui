import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCarretLeft: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 25 26" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.044 19.0014C14.573 19.0014 14.109 18.8444 13.741 18.5404L8.642 14.3264C8.234 13.9904 8 13.5064 8 13.0004C8 12.4944 8.234 12.0104 8.641 11.6744L13.741 7.46137C14.349 6.95737 15.216 6.85637 15.95 7.20137C16.598 7.50737 17 8.11437 17 8.78737V17.2134C17 17.8864 16.598 18.4934 15.95 18.7994C15.661 18.9354 15.351 19.0014 15.044 19.0014Z"
      fill={fill}
    />
  </svg>
);

IconCarretLeft.defaultProps = {
  ...iconDefaultProps,
};

export default IconCarretLeft;
