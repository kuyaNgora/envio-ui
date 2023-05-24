import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconFilePlus: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.9997 13H12.9997V12C12.9997 11.448 12.5527 11 11.9997 11C11.4467 11 10.9997 11.448 10.9997 12V13H9.9997C9.4467 13 8.9997 13.448 8.9997 14C8.9997 14.552 9.4467 15 9.9997 15H10.9997V16C10.9997 16.552 11.4467 17 11.9997 17C12.5527 17 12.9997 16.552 12.9997 16V15H13.9997C14.5527 15 14.9997 14.552 14.9997 14C14.9997 13.448 14.5527 13 13.9997 13ZM17.444 20H6.555C6.249 20 6 19.776 6 19.5V4.5C6 4.224 6.249 4 6.555 4H12V7.15C12 8.722 13.217 10 14.714 10H18V19.5C18 19.776 17.751 20 17.444 20ZM14 4.978L16.742 8H14.714C14.32 8 14 7.619 14 7.15V4.978ZM19.74 8.328L14.296 2.328C14.106 2.119 13.838 2 13.555 2H6.555C5.146 2 4 3.122 4 4.5V19.5C4 20.878 5.146 22 6.555 22H17.444C18.853 22 20 20.878 20 19.5V9C20 8.751 19.907 8.512 19.74 8.328Z"
      fill={fill}
    />
  </svg>
);

IconFilePlus.defaultProps = {
  ...iconDefaultProps,
};

export default IconFilePlus;
