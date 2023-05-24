import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconFolder: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 21H4.5C3.122 21 2 19.909 2 18.568V6.432C2 5.091 3.122 4 4.5 4H9.101C9.4 4 9.685 4.135 9.875 4.367L12.474 7.546H19.5C20.878 7.546 22 8.637 22 9.978V18.568C22 19.909 20.878 21 19.5 21Z"
      fill={fill}
    />
  </svg>
);

IconFolder.defaultProps = {
  ...iconDefaultProps,
};

export default IconFolder;
