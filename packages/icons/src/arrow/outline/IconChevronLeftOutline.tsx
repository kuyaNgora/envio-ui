import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconChevronLeft: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3287 18.9997C14.0367 18.9997 13.7467 18.8727 13.5487 18.6267L8.72066 12.6267C8.42266 12.2557 8.42666 11.7257 8.73166 11.3597L13.7317 5.35974C14.0847 4.93574 14.7157 4.87874 15.1407 5.23174C15.5647 5.58474 15.6217 6.21574 15.2677 6.63974L10.7927 12.0107L15.1077 17.3727C15.4537 17.8027 15.3857 18.4327 14.9547 18.7787C14.7707 18.9277 14.5487 18.9997 14.3287 18.9997Z"
      fill={fill}
    />
  </svg>
);

IconChevronLeft.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronLeft;
