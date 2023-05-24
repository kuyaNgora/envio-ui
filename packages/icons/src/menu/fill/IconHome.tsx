import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconHome: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 25" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.715 2.30096L20.424 10.185C20.79 10.561 21 11.085 21 11.624V20C21 21.103 20.153 22 19.112 22H16V13C16 12.448 15.553 12 15 12H9C8.447 12 8 12.448 8 13V22H4.889C3.848 22 3 21.103 3 20V11.624C3 11.085 3.21 10.561 3.575 10.186L11.285 2.30096C11.662 1.91596 12.338 1.91596 12.715 2.30096ZM14.0002 21.0004H10.0002V14.0004H14.0002V21.0004Z"
      fill={fill}
    />
  </svg>
);

IconHome.defaultProps = {
  ...iconDefaultProps,
};

export default IconHome;
