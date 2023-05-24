import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconBatteryEmpty: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 10V14C22 14.552 21.552 15 21 15C20.448 15 20 14.552 20 14V10C20 9.448 20.448 9 21 9C21.552 9 22 9.448 22 10ZM16 15.571C16 15.824 15.879 15.977 15.828 16L4.176 16.001C4.126 15.983 4 15.83 4 15.571V8.429C4 8.17 4.126 8.017 4.167 8L15.824 7.999C15.874 8.017 16 8.17 16 8.429V15.571ZM15.833 6H4.167C2.972 6 2 7.089 2 8.429V15.571C2 16.911 2.972 18 4.167 18H15.833C17.028 18 18 16.911 18 15.571V8.429C18 7.089 17.028 6 15.833 6Z"
      fill={fill}
    />
  </svg>
);

IconBatteryEmpty.defaultProps = {
  ...iconDefaultProps,
};

export default IconBatteryEmpty;
