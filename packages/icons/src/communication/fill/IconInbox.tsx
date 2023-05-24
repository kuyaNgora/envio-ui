import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconInbox: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.342 5.553C8.511 5.214 8.858 5 9.237 5H14.764C15.143 5 15.489 5.214 15.658 5.553L18.382 11H16C15.448 11 15 11.448 15 12V14C15 14.553 14.552 15 14 15H10C9.448 15 9 14.553 9 14V12C9 11.448 8.552 11 8 11H5.618L8.342 5.553ZM20.789 11.342L17.447 4.658C16.936 3.636 15.908 3 14.764 3H9.236C8.092 3 7.065 3.636 6.553 4.658L3.211 11.342C3.073 11.618 3 11.928 3 12.237V18C3 19.655 4.346 21 6 21H18C19.655 21 21 19.655 21 18V12.237C21 11.928 20.927 11.618 20.789 11.342Z"
      fill={fill}
    />
  </svg>
);

IconInbox.defaultProps = {
  ...iconDefaultProps,
};

export default IconInbox;
