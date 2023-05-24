import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconDroplet: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5684 5.42878L8.65836 9.35478C6.48236 11.5378 6.45336 15.1138 8.59036 17.3268C9.61936 18.3938 10.9934 18.9878 12.4574 18.9998H12.4594C13.9244 19.0108 15.3084 18.4398 16.3544 17.3898C18.5284 15.2108 18.5574 11.6358 16.4194 9.42078L12.5684 5.42878ZM12.4414 20.9998C10.4344 20.9828 8.55636 20.1718 7.15136 18.7158C4.26236 15.7238 4.30136 10.8928 7.23836 7.94578L11.8714 3.29478C12.0614 3.10478 12.3194 2.99778 12.5884 2.99978C12.8574 3.00278 13.1134 3.11378 13.2994 3.30578L17.8594 8.03278C20.7474 11.0258 20.7084 15.8578 17.7714 18.8018C16.3424 20.2358 14.4504 21.0158 12.4434 20.9998H12.4414Z"
      fill={fill}
    />
  </svg>
);

IconDroplet.defaultProps = {
  ...iconDefaultProps,
};

export default IconDroplet;
