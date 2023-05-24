import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconFileLines: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9997 14H8.9997C8.4477 14 7.9997 13.552 7.9997 13C7.9997 12.448 8.4477 12 8.9997 12H11.9997C12.5517 12 12.9997 12.448 12.9997 13C12.9997 13.552 12.5517 14 11.9997 14ZM7.9997 17C7.9997 16.448 8.4477 16 8.9997 16H14.9997C15.5527 16 15.9997 16.448 15.9997 17C15.9997 17.552 15.5527 18 14.9997 18H8.9997C8.4477 18 7.9997 17.552 7.9997 17ZM17.444 20H6.555C6.249 20 6 19.776 6 19.5V4.5C6 4.224 6.249 4 6.555 4H12V7.15C12 8.722 13.217 10 14.714 10H18V19.5C18 19.776 17.751 20 17.444 20ZM14 4.978L16.742 8H14.714C14.32 8 14 7.619 14 7.15V4.978ZM19.74 8.328L14.296 2.328C14.106 2.119 13.838 2 13.555 2H6.555C5.146 2 4 3.122 4 4.5V19.5C4 20.878 5.146 22 6.555 22H17.444C18.853 22 20 20.878 20 19.5V9C20 8.751 19.907 8.512 19.74 8.328Z"
      fill={fill}
    />
  </svg>
);

IconFileLines.defaultProps = {
  ...iconDefaultProps,
};

export default IconFileLines;
