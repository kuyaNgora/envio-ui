import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPlayCircle: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 14.5999L14.309 11.9999L11.5 9.4009V14.5999ZM15.98 13.179L12.338 16.549C12.019 16.845 11.604 17 11.181 17C10.948 17 10.711 16.952 10.488 16.855C9.878 16.589 9.5 16.02 9.5 15.37V8.63C9.5 7.981 9.878 7.411 10.488 7.146C11.114 6.871 11.841 6.991 12.339 7.452L15.98 10.822C16.311 11.127 16.5 11.557 16.5 12C16.5 12.444 16.311 12.873 15.98 13.179ZM12 2C6.486 2 2 6.487 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.487 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconPlayCircle.defaultProps = {
  ...iconDefaultProps,
};

export default IconPlayCircle;
