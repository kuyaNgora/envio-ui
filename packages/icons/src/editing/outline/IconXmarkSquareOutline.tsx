import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconXmarkSquare: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.707 9.293C14.316 8.902 13.684 8.902 13.293 9.293L12 10.586L10.707 9.293C10.316 8.902 9.684 8.902 9.293 9.293C8.902 9.684 8.902 10.316 9.293 10.707L10.586 12L9.293 13.293C8.902 13.684 8.902 14.316 9.293 14.707C9.488 14.902 9.744 15 10 15C10.256 15 10.512 14.902 10.707 14.707L12 13.414L13.293 14.707C13.488 14.902 13.744 15 14 15C14.256 15 14.512 14.902 14.707 14.707C15.098 14.316 15.098 13.684 14.707 13.293L13.414 12L14.707 10.707C15.098 10.316 15.098 9.684 14.707 9.293ZM19 18C19 18.552 18.552 19 18 19H6C5.448 19 5 18.552 5 18V6C5 5.448 5.448 5 6 5H18C18.552 5 19 5.448 19 6V18ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
      fill={fill}
    />
  </svg>
);

IconXmarkSquare.defaultProps = {
  ...iconDefaultProps,
};

export default IconXmarkSquare;
