import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCreditCard2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6V9H2V6ZM0 10V6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V10V18C24 19.6569 22.6569 21 21 21H3C1.34315 21 0 19.6569 0 18V10ZM22 11V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18V11H22Z"
      fill={fill}
    />
  </svg>
);

IconCreditCard2.defaultProps = {
  ...iconDefaultProps,
};

export default IconCreditCard2;
