import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconClockThree: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 11H13V8C13 7.447 12.552 7 12 7C11.448 7 11 7.447 11 8V12C11 12.553 11.448 13 12 13H16C16.553 13 17 12.553 17 12C17 11.447 16.553 11 16 11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconClockThree.defaultProps = {
  ...iconDefaultProps,
};

export default IconClockThree;
