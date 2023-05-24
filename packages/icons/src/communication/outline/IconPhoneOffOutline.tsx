import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPhoneOff: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.69855 14.63C5.01255 12.389 4.00055 9.613 4.00055 6.6C4.00055 5.166 5.16655 4 6.59955 4C6.70955 4 6.81755 4.007 6.92755 4.022L7.98855 8.642L7.81835 8.7308L7.81796 8.731C7.69304 8.79612 7.56526 8.86273 7.44355 8.927C6.57255 9.382 5.94355 9.711 6.26555 10.514C6.64155 11.584 7.18655 12.576 7.84455 13.484L9.27355 12.055C8.97155 11.609 8.70155 11.139 8.47455 10.645C9.71455 9.995 9.71855 9.992 9.85455 9.85C10.0885 9.607 10.1825 9.262 10.1075 8.934L8.73855 2.97C8.66155 2.634 8.41755 2.361 8.09255 2.249C7.85455 2.166 7.60855 2.105 7.36555 2.066C7.11655 2.023 6.86055 2 6.59955 2C4.06355 2 2.00055 4.064 2.00055 6.6C2.00055 10.166 3.22955 13.443 5.27155 16.057L6.69855 14.63ZM19.7396 4.2608C19.3926 3.9128 18.8307 3.9128 18.4826 4.2608L4.26065 18.4828C4.08765 18.6568 4.00065 18.8838 4.00065 19.1118C4.00065 19.3388 4.08765 19.5668 4.26065 19.7398C4.60765 20.0868 5.17065 20.0868 5.51765 19.7398L19.7396 5.5178C20.0877 5.1698 20.0877 4.6078 19.7396 4.2608ZM21.7508 15.9088C21.8328 16.1438 21.8958 16.3888 21.9358 16.6388C21.9778 16.8868 21.9998 17.1418 21.9998 17.4008C21.9998 19.9368 19.9368 21.9998 17.4008 21.9998C13.8338 21.9998 10.5568 20.7708 7.94385 18.7288L9.37085 17.3018C11.6118 18.9878 14.3868 19.9998 17.4008 19.9998C18.8338 19.9998 19.9998 18.8338 19.9998 17.4008C19.9998 17.2888 19.9938 17.1798 19.9788 17.0728L15.3588 16.0118L15.0738 16.5568L15.0692 16.5657C14.6166 17.4311 14.2889 18.0576 13.4468 17.7198C12.3938 17.3508 11.4138 16.8108 10.5128 16.1588L11.9428 14.7288C12.3898 15.0328 12.8608 15.3028 13.3548 15.5278C14.0039 14.2865 14.0078 14.2828 14.1502 14.1464L14.1508 14.1458C14.3938 13.9118 14.7378 13.8198 15.0668 13.8928L21.0308 15.2618C21.3668 15.3388 21.6388 15.5828 21.7508 15.9088Z"
      fill={fill}
    />
  </svg>
);

IconPhoneOff.defaultProps = {
  ...iconDefaultProps,
};

export default IconPhoneOff;
