import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPersonMin: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5 13C5.641 13 2.5 16.14 2.5 20C2.5 20.552 2.947 21 3.5 21C4.053 21 4.5 20.552 4.5 20C4.5 17.243 6.743 15 9.5 15C12.257 15 14.5 17.243 14.5 20C14.5 20.552 14.947 21 15.5 21C16.053 21 16.5 20.552 16.5 20C16.5 16.14 13.359 13 9.5 13ZM7.5 7C7.5 8.103 8.397 9 9.5 9C10.603 9 11.5 8.103 11.5 7C11.5 5.897 10.603 5 9.5 5C8.397 5 7.5 5.897 7.5 7ZM5.5 7C5.5 4.794 7.294 3 9.5 3C11.706 3 13.5 4.794 13.5 7C13.5 9.206 11.706 11 9.5 11C7.294 11 5.5 9.206 5.5 7ZM21.5 7C21.5 7.55 21.05 8 20.5 8H16.5C15.95 8 15.5 7.55 15.5 7C15.5 6.45 15.95 6 16.5 6H20.5C21.05 6 21.5 6.45 21.5 7Z"
      fill={fill}
    />
  </svg>
);

IconPersonMin.defaultProps = {
  ...iconDefaultProps,
};

export default IconPersonMin;
