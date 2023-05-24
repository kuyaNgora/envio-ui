import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPersonPlus: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 11C12.206 11 14 9.206 14 7C14 4.794 12.206 3 10 3C7.794 3 6 4.794 6 7C6 9.206 7.794 11 10 11ZM21 6H20V5C20 4.45 19.55 4 19 4C18.45 4 18 4.45 18 5V6H17C16.45 6 16 6.45 16 7C16 7.55 16.45 8 17 8H18V9C18 9.55 18.45 10 19 10C19.55 10 20 9.55 20 9V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6ZM17 20C17 20.552 16.553 21 16 21H4C3.447 21 3 20.552 3 20C3 16.14 6.141 13 10 13C13.859 13 17 16.14 17 20Z"
      fill={fill}
    />
  </svg>
);

IconPersonPlus.defaultProps = {
  ...iconDefaultProps,
};

export default IconPersonPlus;
