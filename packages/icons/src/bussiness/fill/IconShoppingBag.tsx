import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconShoppingBag: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.41412 7L8.12112 5.293C8.30812 5.107 8.56512 5 8.82812 5H15.1721C15.4351 5 15.6921 5.107 15.8791 5.293L17.5861 7H6.41412ZM12.0001 16C9.79412 16 8.00012 14.206 8.00012 12C8.00012 11.448 8.44712 11 9.00012 11C9.55312 11 10.0001 11.448 10.0001 12C10.0001 13.103 10.8971 14 12.0001 14C13.1021 14 14.0001 13.103 14.0001 12C14.0001 11.448 14.4471 11 15.0001 11C15.5531 11 16.0001 11.448 16.0001 12C16.0001 14.206 14.2061 16 12.0001 16ZM20.1211 6.707L17.2931 3.879C16.7271 3.312 15.9731 3 15.1721 3H8.82812C8.02712 3 7.27312 3.312 6.70712 3.879L3.87912 6.707C3.31212 7.273 3.00012 8.027 3.00012 8.829V18C3.00012 19.654 4.34612 21 6.00012 21H18.0001C19.6541 21 21.0001 19.654 21.0001 18V8.829C21.0001 8.027 20.6871 7.273 20.1211 6.707Z"
      fill={fill}
    />
  </svg>
);

IconShoppingBag.defaultProps = {
  ...iconDefaultProps,
};

export default IconShoppingBag;
