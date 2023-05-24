import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArchive: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.8662 14H14.1342C14.6102 14 15.0002 13.61 15.0002 13.134V12.866C15.0002 12.39 14.6102 12 14.1342 12H9.8662C9.3892 12 9.0002 12.39 9.0002 12.866V13.134C9.0002 13.61 9.3892 14 9.8662 14ZM18 18C18 18.551 17.552 19 17 19H7C6.449 19 6 18.551 6 18V9H18V18ZM6 5H18C18.552 5 19 5.449 19 6C19 6.551 18.552 7 18 7H6C5.449 7 5 6.551 5 6C5 5.449 5.449 5 6 5ZM21 6C21 4.346 19.654 3 18 3H6C4.346 3 3 4.346 3 6C3 6.883 3.391 7.67 4 8.22V18C4 19.654 5.346 21 7 21H17C18.654 21 20 19.654 20 18V8.22C20.609 7.67 21 6.883 21 6Z"
      fill={fill}
    />
  </svg>
);

IconArchive.defaultProps = {
  ...iconDefaultProps,
};

export default IconArchive;
