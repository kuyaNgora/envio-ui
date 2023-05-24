import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPlayCircle: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 14.5996V9.4006L14.309 11.9996L11.5 14.5996ZM12.339 7.4526C11.841 6.9906 11.114 6.8706 10.488 7.1456C9.878 7.4116 9.5 7.9806 9.5 8.6296V15.3706C9.5 16.0196 9.878 16.5886 10.488 16.8546C10.711 16.9526 10.948 16.9996 11.181 16.9996C11.604 16.9996 12.019 16.8446 12.338 16.5486L15.98 13.1786C16.311 12.8726 16.5 12.4436 16.5 11.9996C16.5 11.5566 16.311 11.1266 15.98 10.8216L12.339 7.4526ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconPlayCircle.defaultProps = {
  ...iconDefaultProps,
};

export default IconPlayCircle;
