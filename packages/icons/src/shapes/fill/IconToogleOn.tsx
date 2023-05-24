import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconToogleOn: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 11C14.448 11 14 11.448 14 12C14 12.552 14.448 13 15 13C15.552 13 16 12.552 16 12C16 11.448 15.552 11 15 11ZM15 15C13.346 15 12 13.654 12 12C12 10.346 13.346 9 15 9C16.654 9 18 10.346 18 12C18 13.654 16.654 15 15 15ZM15 5H9C5.141 5 2 8.141 2 12C2 15.859 5.141 19 9 19H15C18.859 19 22 15.859 22 12C22 8.141 18.859 5 15 5Z"
      fill={fill}
    />
  </svg>
);

IconToogleOn.defaultProps = {
  ...iconDefaultProps,
};

export default IconToogleOn;
