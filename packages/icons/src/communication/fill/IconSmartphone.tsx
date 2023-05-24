import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconSmartphone: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 8H9.5C8.947 8 8.5 7.553 8.5 7C8.5 6.447 8.947 6 9.5 6H14.5C15.053 6 15.5 6.447 15.5 7C15.5 7.553 15.053 8 14.5 8ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM17 2H7C5.346 2 4 3.346 4 5V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V5C20 3.346 18.654 2 17 2Z"
      fill={fill}
    />
  </svg>
);

IconSmartphone.defaultProps = {
  ...iconDefaultProps,
};

export default IconSmartphone;
