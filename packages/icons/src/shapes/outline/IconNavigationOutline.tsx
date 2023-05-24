import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconNavigation: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.86592 9.09946L13.0639 10.1565C13.4579 10.2355 13.7649 10.5425 13.8449 10.9365L14.9009 16.1345L18.4189 5.58146L7.86592 9.09946ZM14.6669 21.0005C14.6459 21.0005 14.6259 20.9995 14.6059 20.9985C14.1539 20.9715 13.7769 20.6435 13.6859 20.2005L12.0169 11.9835L3.80092 10.3135C3.35692 10.2235 3.02892 9.84646 3.00192 9.39446C2.97392 8.94246 3.25392 8.52846 3.68292 8.38546L19.6829 3.05246C20.0429 2.93046 20.4389 3.02546 20.7069 3.29346C20.9749 3.56146 21.0679 3.95746 20.9489 4.31746L15.6149 20.3175C15.4779 20.7275 15.0949 21.0005 14.6669 21.0005Z"
      fill={fill}
    />
  </svg>
);

IconNavigation.defaultProps = {
  ...iconDefaultProps,
};

export default IconNavigation;
