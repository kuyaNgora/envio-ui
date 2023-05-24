import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconForward: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.358 10.6741L15.259 6.46008C14.65 5.95808 13.782 5.85708 13.049 6.20108C12.402 6.50708 12 7.11408 12 7.78708V10.3781L7.259 6.46008C6.65 5.95808 5.781 5.85708 5.049 6.20108C4.402 6.50708 4 7.11408 4 7.78708V16.2131C4 16.8861 4.402 17.4931 5.049 17.7991C5.338 17.9351 5.649 18.0011 5.955 18.0011C6.426 18.0011 6.89 17.8441 7.259 17.5391L12 13.6231V16.2131C12 16.8861 12.402 17.4931 13.049 17.7991C13.338 17.9351 13.649 18.0011 13.955 18.0011C14.426 18.0011 14.89 17.8441 15.259 17.5391L20.358 13.3261C20.766 12.9901 21 12.5061 21 12.0001C21 11.4941 20.766 11.0101 20.358 10.6741Z"
      fill={fill}
    />
  </svg>
);

IconForward.defaultProps = {
  ...iconDefaultProps,
};

export default IconForward;
