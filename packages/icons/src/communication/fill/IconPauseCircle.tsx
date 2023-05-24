import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPauseCircle: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 15C16 15.55 15.55 16 15 16C14.45 16 14 15.55 14 15V9C14 8.45 14.45 8 15 8C15.55 8 16 8.45 16 9V15ZM10 15C10 15.55 9.55 16 9 16C8.45 16 8 15.55 8 15V9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9V15ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.515 22 22 17.514 22 12C22 6.486 17.515 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconPauseCircle.defaultProps = {
  ...iconDefaultProps,
};

export default IconPauseCircle;
