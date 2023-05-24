import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconEdit: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0197 10.679L13.3247 7.98404L15.2727 6.03504L17.9667 8.72904L16.0197 10.679ZM19.4047 7.33804L19.4037 7.33704L16.6657 4.59904C15.9247 3.86004 14.6517 3.82504 13.9497 4.53004L4.95369 13.526C4.62769 13.851 4.42569 14.283 4.38369 14.74L4.00469 18.91C3.97869 19.205 4.08369 19.497 4.29369 19.707C4.48269 19.896 4.73769 20 5.00069 20C5.03169 20 5.06169 19.999 5.09169 19.996L9.26169 19.617C9.71969 19.575 10.1507 19.374 10.4757 19.049L19.4727 10.052C20.2007 9.32204 20.1697 8.10404 19.4047 7.33804Z"
      fill={fill}
    />
  </svg>
);

IconEdit.defaultProps = {
  ...iconDefaultProps,
};

export default IconEdit;
