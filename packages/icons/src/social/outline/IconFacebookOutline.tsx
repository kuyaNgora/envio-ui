import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconFacebook: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 20H12.5V13.8C12.5 13.247 12.947 12.8 13.5 12.8H15.74L16.185 11.2H13.5C12.947 11.2 12.5 10.753 12.5 10.2V7.5C12.5 6.452 13.397 5.6 14.5 5.6H16.5V4H14.5C12.294 4 10.5 5.57 10.5 7.5V10.2C10.5 10.753 10.053 11.2 9.49997 11.2H7.49997V12.8H9.49997C10.053 12.8 10.5 13.247 10.5 13.8V20ZM13.5 22H9.49997C8.94697 22 8.49997 21.553 8.49997 21V14.8H6.49997C5.94697 14.8 5.49997 14.353 5.49997 13.8V10.2C5.49997 9.647 5.94697 9.2 6.49997 9.2H8.49997V7.5C8.49997 4.468 11.191 2 14.5 2H17.5C18.053 2 18.5 2.447 18.5 3V6.6C18.5 7.152 18.053 7.6 17.5 7.6H14.5V9.2H17.5C17.812 9.2 18.107 9.347 18.296 9.595C18.485 9.844 18.547 10.167 18.464 10.468L17.464 14.067C17.344 14.5 16.949 14.8 16.5 14.8H14.5V21C14.5 21.553 14.053 22 13.5 22Z"
      fill={fill}
    />
  </svg>
);

IconFacebook.defaultProps = {
  ...iconDefaultProps,
};

export default IconFacebook;
