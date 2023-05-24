import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconSpeaker: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 19C18 19.552 17.552 20 17 20H7C6.448 20 6 19.552 6 19V5C6 4.448 6.448 4 7 4H17C17.552 4 18 4.448 18 5V19ZM17 2H7C5.346 2 4 3.346 4 5V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V5C20 3.346 18.654 2 17 2ZM12 17C11.173 17 10.5 16.327 10.5 15.5C10.5 14.673 11.173 14 12 14C12.827 14 13.5 14.673 13.5 15.5C13.5 16.327 12.827 17 12 17ZM12 12C10.07 12 8.5 13.57 8.5 15.5C8.5 17.43 10.07 19 12 19C13.93 19 15.5 17.43 15.5 15.5C15.5 13.57 13.93 12 12 12ZM12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7ZM12 11C13.654 11 15 9.654 15 8C15 6.346 13.654 5 12 5C10.346 5 9 6.346 9 8C9 9.654 10.346 11 12 11Z"
      fill={fill}
    />
  </svg>
);

IconSpeaker.defaultProps = {
  ...iconDefaultProps,
};

export default IconSpeaker;
