import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconHome: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 25" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 20H18.99L19 11.624L11.998 4.43196L5.006 11.583L5 20H8V13C8 12.447 8.447 12 9 12H15C15.552 12 16 12.447 16 13V20ZM14 20H10V14H14V20ZM20.424 10.185L12.715 2.30096C12.338 1.91596 11.662 1.91596 11.285 2.30096L3.575 10.186C3.21 10.561 3 11.085 3 11.624V20C3 21.103 3.847 22 4.888 22H9H15H19.111C20.152 22 21 21.103 21 20V11.624C21 11.085 20.79 10.561 20.424 10.185Z"
      fill={fill}
    />
  </svg>
);

IconHome.defaultProps = {
  ...iconDefaultProps,
};

export default IconHome;
