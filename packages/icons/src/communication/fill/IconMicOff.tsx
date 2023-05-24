import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconMicOff: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5789 12.751C15.8399 12.22 15.9999 11.631 15.9999 11V6C15.9999 3.794 14.2059 2 11.9999 2C10.0519 2 8.42986 3.401 8.07586 5.248L15.5789 12.751ZM18.9998 11C18.9998 10.448 18.5528 10 17.9998 10C17.4468 10 16.9998 10.448 16.9998 11C16.9998 11.909 16.7378 12.75 16.3118 13.484L17.7748 14.947C18.5468 13.823 18.9998 12.464 18.9998 11ZM12.0851 14.9918C12.0572 14.9959 12.0291 15 11.9998 15C9.79376 15 7.99976 13.206 7.99976 11V10.828L12.1558 14.984C12.132 14.9849 12.1086 14.9883 12.0851 14.9918ZM20.7068 19.293L4.70676 3.293C4.31576 2.902 3.68376 2.902 3.29276 3.293C2.90176 3.684 2.90176 4.316 3.29276 4.707L19.2928 20.707C19.4878 20.902 19.7438 21 19.9998 21C20.2558 21 20.5118 20.902 20.7068 20.707C21.0978 20.316 21.0978 19.684 20.7068 19.293ZM12.9998 20H14.9998C15.5498 20 15.9998 20.45 15.9998 21C15.9998 21.55 15.5498 22 14.9998 22H8.99976C8.44976 22 7.99976 21.55 7.99976 21C7.99976 20.45 8.44976 20 8.99976 20H10.9998V17.92C7.61276 17.432 4.99976 14.52 4.99976 11C4.99976 10.448 5.44676 10 5.99976 10C6.55276 10 6.99976 10.448 6.99976 11C6.99976 13.757 9.24276 16 11.9998 16C12.3618 16 12.7138 15.957 13.0548 15.883L14.6478 17.476C14.1268 17.69 13.5728 17.836 12.9998 17.919V20Z"
      fill={fill}
    />
  </svg>
);

IconMicOff.defaultProps = {
  ...iconDefaultProps,
};

export default IconMicOff;
