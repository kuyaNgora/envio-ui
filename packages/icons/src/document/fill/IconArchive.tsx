import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArchive: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 7H6C5.449 7 5 6.551 5 6C5 5.449 5.449 5 6 5H18C18.552 5 19 5.449 19 6C19 6.551 18.552 7 18 7ZM15 13.134C15 13.61 14.61 14 14.134 14H9.866C9.39 14 9 13.61 9 13.134V12.866C9 12.39 9.39 12 9.866 12H14.134C14.61 12 15 12.39 15 12.866V13.134ZM18 3H6C4.346 3 3 4.346 3 6C3 6.883 3.391 7.67 4 8.22V18C4 19.654 5.346 21 7 21H17C18.654 21 20 19.654 20 18V8.22C20.609 7.67 21 6.883 21 6C21 4.346 19.654 3 18 3Z"
      fill={fill}
    />
  </svg>
);

IconArchive.defaultProps = {
  ...iconDefaultProps,
};

export default IconArchive;
