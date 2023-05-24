import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconStopwatch: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 15H12C11.448 15 11 14.553 11 14V11C11 10.447 11.448 10 12 10C12.552 10 13 10.447 13 11V13H15C15.552 13 16 13.447 16 14C16 14.553 15.552 15 15 15ZM12.988 5.058C12.99 5.037 13 5.021 13 5V4H14C14.552 4 15 3.553 15 3C15 2.447 14.552 2 14 2H10C9.448 2 9 2.447 9 3C9 3.553 9.448 4 10 4H11V5C11 5.021 11.01 5.037 11.012 5.058C6.513 5.552 3 9.372 3 14C3 18.963 7.038 23 12 23C16.962 23 21 18.963 21 14C21 9.372 17.487 5.552 12.988 5.058Z"
      fill={fill}
    />
  </svg>
);

IconStopwatch.defaultProps = {
  ...iconDefaultProps,
};

export default IconStopwatch;
