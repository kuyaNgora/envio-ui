import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconBook: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 19C6.449 19 6 18.551 6 18C6 17.449 6.449 17 7 17H18V19H7ZM19 3H7C5.346 3 4 4.346 4 6V18C4 19.654 5.346 21 7 21H18H19C19.552 21 20 20.552 20 20V19V17V4C20 3.448 19.552 3 19 3Z"
      fill={fill}
    />
  </svg>
);

IconBook.defaultProps = {
  ...iconDefaultProps,
};

export default IconBook;
