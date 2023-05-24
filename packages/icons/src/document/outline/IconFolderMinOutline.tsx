import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconFolderMin: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 12.9996H10C9.45 12.9996 9 13.4496 9 13.9996C9 14.5496 9.45 14.9996 10 14.9996H14C14.55 14.9996 15 14.5496 15 13.9996C15 13.4496 14.55 12.9996 14 12.9996ZM20 18.068C20 18.306 19.776 18.5 19.5 18.5H4.5C4.224 18.5 4 18.306 4 18.068V13.755V5.931C4 5.693 4.224 5.5 4.5 5.5H8.626L11.226 8.678C11.416 8.911 11.7 9.046 12 9.046H19.5C19.776 9.046 20 9.239 20 9.478V18.068ZM19.5 7.046H12.474L9.875 3.867C9.685 3.634 9.4 3.5 9.101 3.5H4.5C3.122 3.5 2 4.59 2 5.931V18.068C2 19.409 3.122 20.5 4.5 20.5H19.5C20.878 20.5 22 19.409 22 18.068V9.478C22 8.136 20.878 7.046 19.5 7.046Z"
      fill={fill}
    />
  </svg>
);

IconFolderMin.defaultProps = {
  ...iconDefaultProps,
};

export default IconFolderMin;
