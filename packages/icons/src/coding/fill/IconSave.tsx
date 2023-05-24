import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconSave: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.2921 3.878L20.1211 8.707C20.6831 9.269 21.0001 10.033 21.0001 10.829V18C21.0001 19.657 19.6571 21 18.0001 21H16.0001V17C16.0001 15.897 15.1021 15 14.0001 15H10.0001C8.89712 15 8.00012 15.897 8.00012 17V21H6.00012C4.34312 21 3.00012 19.657 3.00012 18V6C3.00012 4.343 4.34312 3 6.00012 3H8.00012V10C8.00012 10.552 8.44712 11 9.00012 11H15.0001C15.5531 11 16.0001 10.552 16.0001 10C16.0001 9.448 15.5531 9 15.0001 9H10.0001V3H13.1721C13.9671 3 14.7301 3.316 15.2921 3.878ZM10 17H14L14.001 21H10V17Z"
      fill={fill}
    />
  </svg>
);

IconSave.defaultProps = {
  ...iconDefaultProps,
};

export default IconSave;
