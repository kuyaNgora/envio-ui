import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconChevronDown: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15.4997C11.772 15.4997 11.545 15.4227 11.36 15.2677L5.36003 10.2677C4.93603 9.91474 4.87803 9.28374 5.23203 8.85974C5.58503 8.43574 6.21503 8.37874 6.64003 8.73174L12.011 13.2077L17.373 8.89274C17.803 8.54674 18.433 8.61474 18.779 9.04474C19.125 9.47474 19.057 10.1037 18.627 10.4507L12.627 15.2787C12.444 15.4257 12.222 15.4997 12 15.4997Z"
      fill={fill}
    />
  </svg>
);

IconChevronDown.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronDown;
