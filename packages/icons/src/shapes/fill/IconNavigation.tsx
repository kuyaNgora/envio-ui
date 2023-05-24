import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconNavigation: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.667 21C14.646 21 14.626 20.999 14.606 20.998C14.154 20.971 13.777 20.643 13.687 20.199L12.149 12.632C12.069 12.238 11.762 11.931 11.368 11.851L3.80104 10.312C3.35704 10.223 3.02904 9.84603 3.00204 9.39403C2.97504 8.94103 3.25404 8.52703 3.68404 8.38503L19.684 3.05203C20.043 2.93003 20.439 3.02403 20.707 3.29303C20.975 3.56103 21.068 3.95703 20.949 4.31603L15.615 20.316C15.479 20.727 15.095 21 14.667 21Z"
      fill={fill}
    />
  </svg>
);

IconNavigation.defaultProps = {
  ...iconDefaultProps,
};

export default IconNavigation;
