import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconRecording: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 8C15.794 8 14 9.794 14 12C14 12.731 14.212 13.409 14.557 14H9.443C9.788 13.409 10 12.731 10 12C10 9.794 8.206 8 6 8C3.794 8 2 9.794 2 12C2 14.206 3.794 16 6 16H18C20.206 16 22 14.206 22 12C22 9.794 20.206 8 18 8Z"
      fill={fill}
    />
  </svg>
);

IconRecording.defaultProps = {
  ...iconDefaultProps,
};

export default IconRecording;
