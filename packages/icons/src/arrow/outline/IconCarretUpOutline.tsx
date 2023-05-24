import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCarretUp: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 26 25" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.01381 14.9998H16.9088L12.9978 10.1778L9.01381 14.9998ZM17.2128 16.9998H8.78681C8.11481 16.9998 7.50681 16.5978 7.20181 15.9508C6.85681 15.2178 6.95681 14.3508 7.45981 13.7408L11.6738 8.6418C12.3458 7.8248 13.6548 7.8248 14.3258 8.6418L18.5388 13.7398C19.0428 14.3508 19.1438 15.2178 18.7978 15.9508C18.4928 16.5978 17.8858 16.9998 17.2128 16.9998Z"
      fill={fill}
    />
  </svg>
);

IconCarretUp.defaultProps = {
  ...iconDefaultProps,
};

export default IconCarretUp;
