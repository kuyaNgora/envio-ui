import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconHardDrive: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 16C7 15.45 7.45 15 8 15C8.55 15 9 15.45 9 16C9 16.55 8.55 17 8 17C7.45 17 7 16.55 7 16ZM12 15H16C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17H12C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15ZM18 19H6C5.449 19 5 18.552 5 18V13H19V18C19 18.552 18.551 19 18 19ZM8.342 5.553C8.512 5.212 8.855 5 9.236 5H14.764C15.145 5 15.488 5.212 15.658 5.553L18.382 11H5.618L8.342 5.553ZM20.789 11.342L17.447 4.658C16.936 3.636 15.908 3 14.764 3H9.236C8.092 3 7.064 3.636 6.553 4.658L3.211 11.342C3.073 11.618 3 11.928 3 12.236V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V12.236C21 11.928 20.927 11.618 20.789 11.342Z"
      fill={fill}
    />
  </svg>
);

IconHardDrive.defaultProps = {
  ...iconDefaultProps,
};

export default IconHardDrive;
