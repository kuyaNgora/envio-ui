import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconFolder: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 13.755V18.068C4 18.306 4.224 18.5 4.5 18.5H19.5C19.776 18.5 20 18.306 20 18.068V9.478C20 9.239 19.776 9.046 19.5 9.046H12C11.7 9.046 11.416 8.911 11.226 8.678L8.626 5.5H4.5C4.224 5.5 4 5.693 4 5.931V13.755ZM19.5 20.5H4.5C3.122 20.5 2 19.409 2 18.068V5.931C2 4.59 3.122 3.5 4.5 3.5H9.101C9.4 3.5 9.685 3.634 9.875 3.867L12.474 7.046H19.5C20.878 7.046 22 8.136 22 9.478V18.068C22 19.409 20.878 20.5 19.5 20.5Z"
      fill={fill}
    />
  </svg>
);

IconFolder.defaultProps = {
  ...iconDefaultProps,
};

export default IconFolder;
