import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowCircleDown: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.69 13.861L12.69 16.723C12.645 16.766 12.589 16.787 12.539 16.82C12.485 16.856 12.437 16.899 12.377 16.924C12.256 16.973 12.128 17 12 17C11.869 17 11.739 16.973 11.617 16.923C11.495 16.872 11.384 16.799 11.292 16.706L8.293 13.707C7.902 13.316 7.902 12.683 8.293 12.293C8.683 11.902 9.316 11.902 9.707 12.293L11 13.586V8C11 7.447 11.447 7 12 7C12.552 7 13 7.447 13 8V13.663L14.309 12.414C14.709 12.033 15.341 12.047 15.723 12.447C16.105 12.847 16.089 13.48 15.69 13.861ZM12 2C6.485 2 2 6.486 2 12C2 17.514 6.485 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconArrowCircleDown.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowCircleDown;
