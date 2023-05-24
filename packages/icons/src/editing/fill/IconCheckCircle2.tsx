import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCheckCircle2: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.295 9.605L11.727 15.605C11.539 15.852 11.248 15.998 10.938 16H10.931C10.624 16 10.334 15.858 10.144 15.616L7.712 12.509C7.372 12.075 7.448 11.446 7.883 11.106C8.317 10.765 8.947 10.841 9.287 11.277L10.92 13.363L14.704 8.394C15.038 7.955 15.665 7.869 16.106 8.204C16.545 8.539 16.63 9.166 16.295 9.605ZM12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.523 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconCheckCircle2.defaultProps = {
  ...iconDefaultProps,
};

export default IconCheckCircle2;
