import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCarretLeft: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.678 13.0022L14.5 16.9852V9.09225L9.678 13.0022ZM14.544 19.0012C14.073 19.0012 13.609 18.8442 13.241 18.5402L8.141 14.3262C7.734 13.9902 7.5 13.5062 7.5 13.0002C7.5 12.4942 7.734 12.0102 8.141 11.6742L13.241 7.46125C13.849 6.95725 14.716 6.85625 15.45 7.20125C16.097 7.50725 16.5 8.11425 16.5 8.78725V17.2132C16.5 17.8862 16.097 18.4932 15.45 18.7992C15.161 18.9352 14.851 19.0012 14.544 19.0012Z"
      fill={fill}
    />
  </svg>
);

IconCarretLeft.defaultProps = {
  ...iconDefaultProps,
};

export default IconCarretLeft;
