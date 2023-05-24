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
      d="M7 11C7 10.448 7.448 10 8 10C8.552 10 9 10.448 9 11C9 11.552 8.552 12 8 12C7.448 12 7 11.552 7 11ZM12 10C11.448 10 11 10.448 11 11C11 11.552 11.448 12 12 12C12.552 12 13 11.552 13 11C13 10.448 12.552 10 12 10ZM16 10C15.448 10 15 10.448 15 11C15 11.552 15.448 12 16 12C16.552 12 17 11.552 17 11C17 10.448 16.552 10 16 10ZM20 16C20 16.551 19.551 17 19 17H8.554C8.011 17 7.477 17.148 7.01 17.428L4 19.234V6C4 5.449 4.449 5 5 5H19C19.551 5 20 5.449 20 6V16ZM19 3H5C3.346 3 2 4.346 2 6V21C2 21.36 2.194 21.693 2.507 21.87C2.66 21.957 2.83 22 3 22C3.178 22 3.356 21.953 3.515 21.857L8.039 19.143C8.195 19.049 8.373 19 8.554 19H19C20.654 19 22 17.654 22 16V6C22 4.346 20.654 3 19 3Z"
      fill={fill}
    />
  </svg>
);

IconMessageSquare.defaultProps = {
  ...iconDefaultProps,
};

export default IconMessageSquare;
