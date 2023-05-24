import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconForward: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 16.9083V9.01427L18.322 12.9983L13.5 16.9083ZM5.5 16.9083V9.01427L10.322 12.9983L5.5 16.9083ZM19.858 11.6743L14.759 7.46027C14.15 6.95827 13.282 6.85627 12.55 7.20127C11.902 7.50727 11.5 8.11427 11.5 8.78727V11.3783L6.759 7.46027C6.15 6.95827 5.281 6.85627 4.55 7.20127C3.902 7.50727 3.5 8.11427 3.5 8.78727V17.2133C3.5 17.8863 3.902 18.4933 4.55 18.7993C4.839 18.9343 5.149 19.0013 5.456 19.0013C5.927 19.0013 6.391 18.8443 6.759 18.5393L11.5 14.6233V17.2133C11.5 17.8863 11.902 18.4933 12.55 18.7993C12.839 18.9343 13.149 19.0013 13.456 19.0013C13.927 19.0013 14.391 18.8443 14.759 18.5393L19.859 14.3263C20.266 13.9903 20.5 13.5063 20.5 13.0003C20.5 12.4943 20.266 12.0103 19.858 11.6743Z"
      fill={fill}
    />
  </svg>
);

IconForward.defaultProps = {
  ...iconDefaultProps,
};

export default IconForward;
