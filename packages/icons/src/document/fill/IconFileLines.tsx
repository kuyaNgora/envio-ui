import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconFileLines: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.7139 8C14.3199 8 13.9999 7.619 13.9999 7.15V3.978L17.7419 8H14.7139ZM14.9999 18H8.99988C8.44788 18 7.99988 17.552 7.99988 17C7.99988 16.448 8.44788 16 8.99988 16H14.9999C15.5529 16 15.9999 16.448 15.9999 17C15.9999 17.552 15.5529 18 14.9999 18ZM8.99988 12H11.9999C12.5519 12 12.9999 12.448 12.9999 13C12.9999 13.552 12.5519 14 11.9999 14H8.99988C8.44788 14 7.99988 13.552 7.99988 13C7.99988 12.448 8.44788 12 8.99988 12ZM19.7399 7.328L15.2959 2.328C15.1069 2.119 14.8379 2 14.5559 2H6.55588C5.14688 2 3.99988 3.122 3.99988 4.5V19.5C3.99988 20.878 5.14688 22 6.55588 22H17.4439C18.8539 22 19.9999 20.878 19.9999 19.5V8C19.9999 7.751 19.9069 7.512 19.7399 7.328Z"
      fill={fill}
    />
  </svg>
);

IconFileLines.defaultProps = {
  ...iconDefaultProps,
};

export default IconFileLines;
