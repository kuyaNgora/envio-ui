import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconClockThree: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 13H12C11.448 13 11 12.553 11 12V8C11 7.447 11.448 7 12 7C12.552 7 13 7.447 13 8V11H16C16.553 11 17 11.447 17 12C17 12.553 16.553 13 16 13ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconClockThree.defaultProps = {
  ...iconDefaultProps,
};

export default IconClockThree;
