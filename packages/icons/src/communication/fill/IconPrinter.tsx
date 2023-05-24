import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPrinter: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 19V15H16.5L16.502 19H7.5ZM8.014 5H16V7H8.007L8.014 5ZM19.363 7H18V5C18 3.897 17.178 3 16.167 3H7.833C6.822 3 6 3.897 6 5V7H4.637C3.183 7 2 8.196 2 9.667V16.333C2 17.804 3.183 19 4.637 19H5.5C5.5 20.103 6.397 21 7.5 21H16.5C17.603 21 18.5 20.103 18.5 19H19.363C20.817 19 22 17.804 22 16.333V9.667C22 8.196 20.817 7 19.363 7Z"
      fill={fill}
    />
  </svg>
);

IconPrinter.defaultProps = {
  ...iconDefaultProps,
};

export default IconPrinter;
