import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPulse: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.329 20.0008C14.262 20.0008 14.193 19.9978 14.124 19.9908C13.244 19.9038 12.554 19.2828 12.364 18.4078L9.681 6.01579L6.918 12.3978C6.759 12.7638 6.398 13.0008 6 13.0008H3C2.447 13.0008 2 12.5528 2 12.0008C2 11.4478 2.447 11.0008 3 11.0008H5.344L7.85 5.21179C8.205 4.39579 8.987 3.92079 9.876 4.00979C10.756 4.09679 11.446 4.71779 11.636 5.59279L14.319 17.9848L17.082 11.6028C17.241 11.2368 17.601 11.0008 18 11.0008H21C21.553 11.0008 22 11.4478 22 12.0008C22 12.5528 21.553 13.0008 21 13.0008H18.656L16.15 18.7888C15.823 19.5418 15.122 20.0008 14.329 20.0008Z"
      fill={fill}
    />
  </svg>
);

IconPulse.defaultProps = {
  ...iconDefaultProps,
};

export default IconPulse;
