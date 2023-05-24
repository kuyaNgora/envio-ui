import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCarretUp: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 26 25" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.2128 17H8.78684C8.11384 17 7.50684 16.598 7.20184 15.951C6.85684 15.218 6.95684 14.351 7.45984 13.741L11.6738 8.64205C12.3458 7.82505 13.6538 7.82505 14.3258 8.64205L18.5388 13.74C19.0428 14.351 19.1438 15.218 18.7978 15.951C18.4928 16.598 17.8858 17 17.2128 17Z"
      fill={fill}
    />
  </svg>
);

IconCarretUp.defaultProps = {
  ...iconDefaultProps,
};

export default IconCarretUp;
