import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconMinCircle: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconMinCircle.defaultProps = {
  ...iconDefaultProps,
};

export default IconMinCircle;
