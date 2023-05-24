import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconAlertCircle: React.FC<BaseIconProps> = ({ size, fill, ...props }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 13C13 13.552 12.552 14 12 14C11.448 14 11 13.552 11 13V8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8V13ZM12 17C11.448 17 11 16.552 11 16C11 15.448 11.448 15 12 15C12.552 15 13 15.448 13 16C13 16.552 12.552 17 12 17ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
        fill={fill}
      />
    </svg>
  );
};

IconAlertCircle.defaultProps = {
  ...iconDefaultProps,
};

export default IconAlertCircle;
