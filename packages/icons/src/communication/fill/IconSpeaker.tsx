import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconSpeaker: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 8C13 8.552 12.552 9 12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8ZM10.5 15.5C10.5 14.673 11.173 14 12 14C12.827 14 13.5 14.673 13.5 15.5C13.5 16.327 12.827 17 12 17C11.173 17 10.5 16.327 10.5 15.5ZM12 19C10.07 19 8.5 17.43 8.5 15.5C8.5 13.57 10.07 12 12 12C13.93 12 15.5 13.57 15.5 15.5C15.5 17.43 13.93 19 12 19ZM12 5C13.654 5 15 6.346 15 8C15 9.654 13.654 11 12 11C10.346 11 9 9.654 9 8C9 6.346 10.346 5 12 5ZM17 2H7C5.346 2 4 3.346 4 5V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V5C20 3.346 18.654 2 17 2Z"
      fill={fill}
    />
  </svg>
);

IconSpeaker.defaultProps = {
  ...iconDefaultProps,
};

export default IconSpeaker;
