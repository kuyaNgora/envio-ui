import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconInbox: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 19H6C5.449 19 5 18.552 5 18V13H7V16C7 16.553 7.448 17 8 17H16C16.552 17 17 16.553 17 16V13H19V18C19 18.552 18.551 19 18 19ZM8.342 5.553C8.512 5.212 8.855 5 9.236 5H14.764C15.145 5 15.488 5.212 15.658 5.553L18.382 11H16C15.448 11 15 11.447 15 12V15H9V12C9 11.447 8.552 11 8 11H5.618L8.342 5.553ZM20.789 11.342L17.447 4.658C16.936 3.636 15.908 3 14.764 3H9.236C8.092 3 7.064 3.636 6.553 4.658L3.211 11.342C3.073 11.618 3 11.928 3 12.236V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V12.236C21 11.928 20.927 11.618 20.789 11.342Z"
      fill={fill}
    />
  </svg>
);

IconInbox.defaultProps = {
  ...iconDefaultProps,
};

export default IconInbox;
