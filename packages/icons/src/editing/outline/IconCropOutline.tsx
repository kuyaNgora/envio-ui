import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCrop: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.556 16C8.25 16 8 15.751 8 15.444V8H15.445C15.751 8 16 8.249 16 8.556V16H8.556ZM21 16H18V8.556C18 7.146 16.854 6 15.445 6H8V3C8 2.447 7.553 2 7 2C6.448 2 6 2.447 6 3V6H3C2.448 6 2 6.447 2 7C2 7.553 2.448 8 3 8H6V15.444C6 16.854 7.147 18 8.556 18H16V21C16 21.553 16.448 22 17 22C17.553 22 18 21.553 18 21V18H21C21.553 18 22 17.553 22 17C22 16.447 21.553 16 21 16Z"
      fill={fill}
    />
  </svg>
);

IconCrop.defaultProps = {
  ...iconDefaultProps,
};

export default IconCrop;
