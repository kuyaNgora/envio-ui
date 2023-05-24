import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconBatteryBolt: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2769 13H6.99988C6.64388 13 6.31388 12.81 6.13488 12.502C5.95588 12.194 5.95488 11.813 6.13188 11.504L9.27688 6H4.16688C2.97188 6 1.99988 7.089 1.99988 8.429V15.571C1.99988 16.911 2.97188 18 4.16688 18H8.41988L11.2769 13ZM15.8335 6H11.5805L8.72348 11H13.0005C13.3565 11 13.6865 11.19 13.8645 11.498C14.0435 11.806 14.0445 12.187 13.8685 12.496L10.7235 18H15.8335C17.0285 18 18.0005 16.911 18.0005 15.571V8.429C18.0005 7.089 17.0285 6 15.8335 6ZM20 10C20 9.448 20.448 9 21 9C21.552 9 22 9.448 22 10V14C22 14.552 21.552 15 21 15C20.448 15 20 14.552 20 14V10Z"
      fill={fill}
    />
  </svg>
);

IconBatteryBolt.defaultProps = {
  ...iconDefaultProps,
};

export default IconBatteryBolt;
