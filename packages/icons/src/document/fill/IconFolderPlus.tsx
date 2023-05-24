import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconFolderPlus: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 15.5H13V16.5C13 17.05 12.55 17.5 12 17.5C11.45 17.5 11 17.05 11 16.5V15.5H10C9.45 15.5 9 15.05 9 14.5C9 13.95 9.45 13.5 10 13.5H11V12.5C11 11.95 11.45 11.5 12 11.5C12.55 11.5 13 11.95 13 12.5V13.5H14C14.55 13.5 15 13.95 15 14.5C15 15.05 14.55 15.5 14 15.5ZM19.5 7.546H12.474L9.875 4.367C9.685 4.135 9.4 4 9.101 4H4.5C3.122 4 2 5.091 2 6.432V18.568C2 19.909 3.122 21 4.5 21H19.5C20.878 21 22 19.909 22 18.568V9.978C22 8.637 20.878 7.546 19.5 7.546Z"
      fill={fill}
    />
  </svg>
);

IconFolderPlus.defaultProps = {
  ...iconDefaultProps,
};

export default IconFolderPlus;
