import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconThermometer: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 9.54V5C13 4.733 12.897 4.487 12.713 4.306C12.514 4.102 12.267 4 12 4C11.448 4 11 4.449 11 5V9.54H13ZM12 22C9.243 22 7 19.757 7 17C7 15.42 7.754 13.937 9 13.003V5C9 3.346 10.346 2 12 2C12.812 2 13.566 2.317 14.127 2.892C14.684 3.434 15 4.189 15 5V13.003C16.246 13.937 17 15.42 17 17C17 19.757 14.757 22 12 22Z"
      fill={fill}
    />
  </svg>
);

IconThermometer.defaultProps = {
  ...iconDefaultProps,
};

export default IconThermometer;
