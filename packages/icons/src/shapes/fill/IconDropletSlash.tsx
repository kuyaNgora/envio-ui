import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconDropletSlash: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.9688 16.1405C20.0018 13.4315 19.4678 10.2345 17.3418 8.03254L12.7828 3.30554C12.5968 3.11354 12.3408 3.00254 12.0718 2.99954C11.8028 2.99754 11.5448 3.10454 11.3548 3.29454L8.74381 5.91554L18.9688 16.1405ZM5.98781 8.81634C3.81181 11.7773 4.01381 16.0013 6.63481 18.7153C8.03981 20.1713 9.91781 20.9823 11.9248 21.0003H11.9268C13.6308 21.0133 15.2478 20.4483 16.5728 19.4013L5.98781 8.81634ZM4.70701 3.29294L20.707 19.2929C21.098 19.6839 21.098 20.3159 20.707 20.7069C20.512 20.9019 20.256 20.9999 20 20.9999C19.744 20.9999 19.488 20.9019 19.293 20.7069L3.29301 4.70694C2.90201 4.31594 2.90201 3.68394 3.29301 3.29294C3.68401 2.90194 4.31601 2.90194 4.70701 3.29294Z"
      fill={fill}
    />
  </svg>
);

IconDropletSlash.defaultProps = {
  ...iconDefaultProps,
};

export default IconDropletSlash;
