import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconVolumeOff: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 21.0005C17.802 21.0005 17.604 20.9415 17.435 20.8255L11.023 16.4295H6C5.448 16.4295 5 15.9815 5 15.4295V8.57148C5 8.01948 5.448 7.57148 6 7.57148H11.023L17.435 3.17548C17.74 2.96548 18.137 2.94148 18.466 3.11548C18.794 3.28848 19 3.62948 19 4.00048V20.0005C19 20.3715 18.794 20.7125 18.466 20.8855C18.32 20.9625 18.16 21.0005 18 21.0005Z"
      fill={fill}
    />
  </svg>
);

IconVolumeOff.defaultProps = {
  ...iconDefaultProps,
};

export default IconVolumeOff;
