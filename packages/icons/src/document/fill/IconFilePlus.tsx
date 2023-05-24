import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconFilePlus: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.7139 8C14.3199 8 13.9999 7.619 13.9999 7.15V3.978L17.7419 8H14.7139ZM13.9999 15H12.9999V16C12.9999 16.552 12.5529 17 11.9999 17C11.4469 17 10.9999 16.552 10.9999 16V15H9.99988C9.44688 15 8.99988 14.552 8.99988 14C8.99988 13.448 9.44688 13 9.99988 13H10.9999V12C10.9999 11.448 11.4469 11 11.9999 11C12.5529 11 12.9999 11.448 12.9999 12V13H13.9999C14.5529 13 14.9999 13.448 14.9999 14C14.9999 14.552 14.5529 15 13.9999 15ZM19.7399 7.328L15.2959 2.328C15.1069 2.119 14.8379 2 14.5559 2H6.55588C5.14688 2 3.99988 3.122 3.99988 4.5V19.5C3.99988 20.878 5.14688 22 6.55588 22H17.4439C18.8539 22 19.9999 20.878 19.9999 19.5V8C19.9999 7.751 19.9069 7.512 19.7399 7.328Z"
      fill={fill}
    />
  </svg>
);

IconFilePlus.defaultProps = {
  ...iconDefaultProps,
};

export default IconFilePlus;
