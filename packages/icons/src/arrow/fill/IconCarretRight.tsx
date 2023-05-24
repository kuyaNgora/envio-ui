import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCarretRight: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 25 26" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.956 19.0014C9.649 19.0014 9.339 18.9354 9.05 18.7994C8.402 18.4934 8 17.8864 8 17.2134V8.78743C8 8.11443 8.402 7.50743 9.05 7.20143C9.782 6.85643 10.65 6.95743 11.259 7.46043L16.358 11.6744C16.767 12.0104 17 12.4944 17 13.0004C17 13.5064 16.767 13.9904 16.358 14.3264L11.259 18.5394C10.891 18.8444 10.427 19.0014 9.956 19.0014Z"
      fill={fill}
    />
  </svg>
);

IconCarretRight.defaultProps = {
  ...iconDefaultProps,
};

export default IconCarretRight;
