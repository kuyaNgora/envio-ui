import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCheckSquare: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.295 9.605L11.727 15.605C11.539 15.852 11.248 15.998 10.938 16H10.931C10.624 16 10.334 15.858 10.144 15.616L7.712 12.509C7.372 12.075 7.448 11.446 7.883 11.106C8.318 10.765 8.946 10.841 9.287 11.277L10.92 13.363L14.704 8.394C15.038 7.955 15.666 7.869 16.106 8.204C16.545 8.539 16.63 9.166 16.295 9.605ZM18 3H6C4.345 3 3 4.345 3 6V18C3 19.654 4.345 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.345 19.654 3 18 3Z"
      fill={fill}
    />
  </svg>
);

IconCheckSquare.defaultProps = {
  ...iconDefaultProps,
};

export default IconCheckSquare;
