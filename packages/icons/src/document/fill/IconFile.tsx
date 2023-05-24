import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconFile: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 3.978L17.742 8H14.714C14.32 8 14 7.619 14 7.15V3.978ZM19.741 7.328L15.296 2.328C15.107 2.119 14.838 2 14.556 2H6.556C5.146 2 4 3.122 4 4.5V19.5C4 20.878 5.146 22 6.556 22H17.444C18.854 22 20 20.878 20 19.5V8C20 7.751 19.908 7.512 19.741 7.328Z"
      fill={fill}
    />
  </svg>
);

IconFile.defaultProps = {
  ...iconDefaultProps,
};

export default IconFile;
