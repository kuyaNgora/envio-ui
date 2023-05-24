import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconToogleOff: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 13C8.448 13 8 12.552 8 12C8 11.448 8.448 11 9 11C9.552 11 10 11.448 10 12C10 12.552 9.552 13 9 13ZM9 9C7.346 9 6 10.346 6 12C6 13.654 7.346 15 9 15C10.654 15 12 13.654 12 12C12 10.346 10.654 9 9 9ZM15 17H9C6.243 17 4 14.757 4 12C4 9.243 6.243 7 9 7H15C17.757 7 20 9.243 20 12C20 14.757 17.757 17 15 17ZM15 5H9C5.141 5 2 8.141 2 12C2 15.859 5.141 19 9 19H15C18.859 19 22 15.859 22 12C22 8.141 18.859 5 15 5Z"
      fill={fill}
    />
  </svg>
);

IconToogleOff.defaultProps = {
  ...iconDefaultProps,
};

export default IconToogleOff;
