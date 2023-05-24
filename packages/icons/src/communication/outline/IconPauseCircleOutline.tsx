import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPauseCircle: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9V15C10 15.55 9.55 16 9 16C8.45 16 8 15.55 8 15V9ZM13.9995 9C13.9995 8.45 14.4495 8 14.9995 8C15.5495 8 15.9995 8.45 15.9995 9V15C15.9995 15.55 15.5495 16 14.9995 16C14.4495 16 13.9995 15.55 13.9995 15V9ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconPauseCircle.defaultProps = {
  ...iconDefaultProps,
};

export default IconPauseCircle;
