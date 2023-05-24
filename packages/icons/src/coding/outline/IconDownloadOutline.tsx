import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconDownload: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.0028 12.5759C11.001 12.5508 11 12.5255 11 12.5V4.5C11 3.948 11.447 3.5 12 3.5C12.553 3.5 13 3.948 13 4.5V12.4998L15.4 10.7C15.842 10.367 16.469 10.458 16.8 10.9C17.132 11.342 17.042 11.969 16.6 12.3L12.6 15.3C12.423 15.433 12.211 15.5 12 15.5C11.799 15.5 11.598 15.439 11.425 15.318L7.425 12.504C6.973 12.186 6.864 11.562 7.182 11.111C7.5 10.659 8.123 10.55 8.575 10.868L11.0028 12.5759ZM6 17.5V18.5H18V17.5C18 16.95 18.45 16.5 19 16.5C19.55 16.5 20 16.95 20 17.5V19.5C20 20.05 19.55 20.5 19 20.5H5C4.45 20.5 4 20.05 4 19.5V17.5C4 16.95 4.45 16.5 5 16.5C5.55 16.5 6 16.95 6 17.5Z"
      fill={fill}
    />
  </svg>
);

IconDownload.defaultProps = {
  ...iconDefaultProps,
};

export default IconDownload;
