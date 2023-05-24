import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowCircleUp: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7075 7.2935C12.6165 7.2015 12.5065 7.1285 12.3855 7.0785C12.2645 7.0275 12.1355 7.0015 12.0055 7.0015C12.0035 7.0015 12.0015 7.0005 11.9995 7.0005C11.9635 7.0005 11.9335 7.0165 11.8975 7.0205C11.8055 7.0305 11.7135 7.0405 11.6265 7.0755C11.5575 7.1035 11.5015 7.1505 11.4405 7.1925C11.3975 7.2225 11.3485 7.2395 11.3095 7.2765L8.3095 10.1385C7.9105 10.5205 7.8955 11.1525 8.2765 11.5525C8.6585 11.9525 9.2905 11.9665 9.6905 11.5855L10.9995 10.3365V16.0005C10.9995 16.5525 11.4475 17.0005 11.9995 17.0005C12.5525 17.0005 12.9995 16.5525 12.9995 16.0005V10.4145L14.2925 11.7075C14.4885 11.9025 14.7445 12.0005 14.9995 12.0005C15.2555 12.0005 15.5115 11.9025 15.7075 11.7075C16.0975 11.3165 16.0975 10.6835 15.7075 10.2935L12.7075 7.2935ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconArrowCircleUp.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowCircleUp;
