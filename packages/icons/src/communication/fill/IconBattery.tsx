import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconBattery: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.16624 6H15.8332C17.0282 6 18.0002 7.089 18.0002 8.429V15.571C18.0002 16.911 17.0282 18 15.8332 18H4.16624C2.97124 18 2.00024 16.911 2.00024 15.571V8.429C2.00024 7.089 2.97124 6 4.16624 6ZM19.9997 10C19.9997 9.448 20.4477 9 20.9997 9C21.5517 9 21.9997 9.448 21.9997 10V14C21.9997 14.552 21.5517 15 20.9997 15C20.4477 15 19.9997 14.552 19.9997 14V10Z"
      fill={fill}
    />
  </svg>
);

IconBattery.defaultProps = {
  ...iconDefaultProps,
};

export default IconBattery;
