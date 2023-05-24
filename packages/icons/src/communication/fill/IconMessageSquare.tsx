import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconMessageSquare: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 11.5C15.448 11.5 15 11.052 15 10.5C15 9.948 15.448 9.5 16 9.5C16.552 9.5 17 9.948 17 10.5C17 11.052 16.552 11.5 16 11.5ZM12 11.5C11.448 11.5 11 11.052 11 10.5C11 9.948 11.448 9.5 12 9.5C12.552 9.5 13 9.948 13 10.5C13 11.052 12.552 11.5 12 11.5ZM8 11.5C7.448 11.5 7 11.052 7 10.5C7 9.948 7.448 9.5 8 9.5C8.552 9.5 9 9.948 9 10.5C9 11.052 8.552 11.5 8 11.5ZM19 2.5H5C3.346 2.5 2 3.846 2 5.5V20.5C2 20.86 2.194 21.193 2.507 21.37C2.66 21.457 2.83 21.5 3 21.5C3.178 21.5 3.356 21.453 3.515 21.357L8.039 18.643C8.195 18.549 8.373 18.5 8.554 18.5H19C20.654 18.5 22 17.154 22 15.5V5.5C22 3.846 20.654 2.5 19 2.5Z"
      fill={fill}
    />
  </svg>
);

IconMessageSquare.defaultProps = {
  ...iconDefaultProps,
};

export default IconMessageSquare;
