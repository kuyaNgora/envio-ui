import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCamera: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 12.5C11.173 12.5 10.5 13.173 10.5 14C10.5 14.827 11.173 15.5 12 15.5C12.827 15.5 13.5 14.827 13.5 14C13.5 13.173 12.827 12.5 12 12.5ZM12 17.5C10.07 17.5 8.5 15.93 8.5 14C8.5 12.07 10.07 10.5 12 10.5C13.93 10.5 15.5 12.07 15.5 14C15.5 15.93 13.93 17.5 12 17.5ZM10 5.5C10 5.224 10.225 5 10.5 5H13.5C13.775 5 14 5.224 14 5.5V7H10V5.5ZM19 7H16V5.5C16 4.122 14.879 3 13.5 3H10.5C9.121 3 8 4.122 8 5.5V7H5C3.346 7 2 8.346 2 10V18C2 19.654 3.346 21 5 21H19C20.654 21 22 19.654 22 18V10C22 8.346 20.654 7 19 7Z"
      fill={fill}
    />
  </svg>
);

IconCamera.defaultProps = {
  ...iconDefaultProps,
};

export default IconCamera;
