import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconStopwatch: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 12.5H13V10.5C13 9.947 12.552 9.5 12 9.5C11.448 9.5 11 9.947 11 10.5V13.5C11 14.053 11.448 14.5 12 14.5H15C15.552 14.5 16 14.053 16 13.5C16 12.947 15.552 12.5 15 12.5ZM12 20.25C8.278 20.25 5.25 17.222 5.25 13.5C5.25 9.778 8.278 6.75 12 6.75C15.722 6.75 18.75 9.778 18.75 13.5C18.75 17.222 15.722 20.25 12 20.25ZM12.988 4.558C12.99 4.537 13 4.521 13 4.5V3.5H14C14.552 3.5 15 3.053 15 2.5C15 1.947 14.552 1.5 14 1.5H10C9.448 1.5 9 1.947 9 2.5C9 3.053 9.448 3.5 10 3.5H11V4.5C11 4.521 11.01 4.537 11.012 4.558C6.513 5.052 3 8.872 3 13.5C3 18.463 7.038 22.5 12 22.5C16.962 22.5 21 18.463 21 13.5C21 8.872 17.487 5.052 12.988 4.558Z"
      fill={fill}
    />
  </svg>
);

IconStopwatch.defaultProps = {
  ...iconDefaultProps,
};

export default IconStopwatch;
