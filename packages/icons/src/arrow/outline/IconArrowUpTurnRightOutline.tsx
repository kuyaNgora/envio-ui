import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowUpTurnRight: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.281 10.3753L15.281 5.37533C14.934 4.94433 14.306 4.87333 13.875 5.21933C13.444 5.56333 13.374 6.19333 13.719 6.62433L16.42 10.0003H7.5C5.845 10.0003 4.5 11.3453 4.5 13.0003V18.0003C4.5 18.5523 4.948 19.0003 5.5 19.0003C6.052 19.0003 6.5 18.5523 6.5 18.0003V13.0003C6.5 12.4483 6.948 12.0003 7.5 12.0003H16.42L13.719 15.3753C13.374 15.8063 13.444 16.4363 13.875 16.7803C14.059 16.9283 14.28 17.0003 14.499 17.0003C14.793 17.0003 15.083 16.8713 15.281 16.6243L19.281 11.6243C19.573 11.2593 19.573 10.7403 19.281 10.3753Z"
      fill={fill}
    />
  </svg>
);

IconArrowUpTurnRight.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowUpTurnRight;
