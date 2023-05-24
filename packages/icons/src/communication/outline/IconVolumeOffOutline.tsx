import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconVolumeOff: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 14.4291H11.333C11.535 14.4291 11.732 14.4911 11.899 14.6041L17 18.1021V5.89914L11.899 9.39714C11.732 9.51014 11.535 9.57214 11.333 9.57214H7V14.4291ZM18 21.0001C17.802 21.0001 17.604 20.9421 17.435 20.8251L11.023 16.4291H6C5.448 16.4291 5 15.9821 5 15.4291V8.57214C5 8.01914 5.448 7.57214 6 7.57214H11.023L17.435 3.17514C17.74 2.96514 18.137 2.94214 18.466 3.11614C18.794 3.28814 19 3.62914 19 4.00014V20.0001C19 20.3711 18.794 20.7121 18.466 20.8851C18.32 20.9621 18.16 21.0001 18 21.0001Z"
      fill={fill}
    />
  </svg>
);

IconVolumeOff.defaultProps = {
  ...iconDefaultProps,
};

export default IconVolumeOff;
