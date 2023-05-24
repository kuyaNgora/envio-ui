import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconFacebook: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 3.5C18 3.224 17.775 3 17.5 3H15C12.238 3 10 5.015 10 7.5V10.2H7.5C7.224 10.2 7 10.424 7 10.7V13.3C7 13.576 7.224 13.8 7.5 13.8H10V20.5C10 20.776 10.224 21 10.5 21H13.5C13.775 21 14 20.776 14 20.5V13.8H16.619C16.844 13.8 17.041 13.65 17.102 13.434L17.823 10.834C17.912 10.516 17.672 10.2 17.342 10.2H14V7.5C14 7.003 14.447 6.6 15 6.6H17.5C17.775 6.6 18 6.376 18 6.1V3.5Z"
      fill={fill}
    />
  </svg>
);

IconFacebook.defaultProps = {
  ...iconDefaultProps,
};

export default IconFacebook;
