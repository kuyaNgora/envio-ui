import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconMusic: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.947 14.992V3.99995C19.947 3.69695 19.809 3.40895 19.573 3.21995C19.336 3.02995 19.024 2.95795 18.73 3.02395L9.75901 5.01695C9.30101 5.11895 8.97501 5.52495 8.97501 5.99295V14.334C8.53501 14.134 8.05101 14.015 7.53601 14.015C5.61001 14.015 4.04401 15.582 4.04401 17.508C4.04401 19.433 5.61001 21 7.53601 21C9.46201 21 11.028 19.433 11.028 17.508C11.028 17.329 11.002 17.158 10.975 16.986V6.79595L17.947 5.24595V12.341C17.507 12.14 17.022 12.022 16.508 12.022C14.582 12.022 13.015 13.588 13.015 15.514C13.015 17.44 14.582 19.006 16.508 19.006C18.433 19.006 20 17.44 20 15.514C20 15.335 19.973 15.164 19.947 14.992Z"
      fill={fill}
    />
  </svg>
);

IconMusic.defaultProps = {
  ...iconDefaultProps,
};

export default IconMusic;
