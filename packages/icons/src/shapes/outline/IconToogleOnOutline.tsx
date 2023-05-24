import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconToogleOn: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 13C14.448 13 14 12.552 14 12C14 11.448 14.448 11 15 11C15.552 11 16 11.448 16 12C16 12.552 15.552 13 15 13ZM15 9C13.346 9 12 10.346 12 12C12 13.654 13.346 15 15 15C16.654 15 18 13.654 18 12C18 10.346 16.654 9 15 9ZM15 17H9C6.243 17 4 14.757 4 12C4 9.243 6.243 7 9 7H15C17.757 7 20 9.243 20 12C20 14.757 17.757 17 15 17ZM15 5H9C5.141 5 2 8.141 2 12C2 15.859 5.141 19 9 19H15C18.859 19 22 15.859 22 12C22 8.141 18.859 5 15 5Z"
      fill={fill}
    />
  </svg>
);

IconToogleOn.defaultProps = {
  ...iconDefaultProps,
};

export default IconToogleOn;
