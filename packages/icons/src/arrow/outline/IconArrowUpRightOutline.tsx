import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowUpRight: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9932 7.04882C17.9932 6.49982 17.5492 6.05282 16.9992 6.04982L9.0062 5.99982H9.0002C8.4502 5.99982 8.0042 6.44382 8.0002 6.99382C7.9962 7.54582 8.4412 7.99682 8.9942 7.99982L14.5522 8.03482L6.2932 16.2928C5.9022 16.6838 5.9022 17.3168 6.2932 17.7068C6.4882 17.9028 6.7442 17.9998 7.0002 17.9998C7.2562 17.9998 7.5122 17.9028 7.7072 17.7068L15.9952 9.41882L16.0002 15.0008C16.0002 15.5528 16.4482 15.9998 17.0002 15.9998H17.0012C17.5532 15.9998 18.0002 15.5508 18.0002 14.9988L17.9932 7.04882Z"
      fill={fill}
    />
  </svg>
);

IconArrowUpRight.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowUpRight;
