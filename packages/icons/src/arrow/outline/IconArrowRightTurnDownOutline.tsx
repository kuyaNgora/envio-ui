import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowRightTurnDown: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7809 13.875C18.4359 13.443 17.8059 13.374 17.3759 13.719L13.9999 16.419V7.5C13.9999 5.845 12.6549 4.5 10.9999 4.5H5.99992C5.44792 4.5 4.99992 4.947 4.99992 5.5C4.99992 6.052 5.44792 6.5 5.99992 6.5H10.9999C11.5519 6.5 11.9999 6.948 11.9999 7.5V16.419L8.62492 13.719C8.19492 13.374 7.56492 13.443 7.21892 13.875C6.87392 14.306 6.94392 14.936 7.37592 15.28L12.3759 19.28C12.5579 19.426 12.7789 19.5 12.9999 19.5C13.2209 19.5 13.4419 19.426 13.6249 19.28L18.6249 15.28C19.0559 14.936 19.1259 14.306 18.7809 13.875Z"
      fill={fill}
    />
  </svg>
);

IconArrowRightTurnDown.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowRightTurnDown;
