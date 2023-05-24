import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconWindowDock: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5.25 16.5C4.83579 16.5 4.5 16.8358 4.5 17.25V18.75C4.5 19.1642 4.83579 19.5 5.25 19.5H6.75C7.16421 19.5 7.5 19.1642 7.5 18.75V17.25C7.5 16.8358 7.16421 16.5 6.75 16.5H5.25Z"
      fill={fill}
    />
    <path
      d="M10.5 17.25C10.5 16.8358 10.8358 16.5 11.25 16.5H12.75C13.1642 16.5 13.5 16.8358 13.5 17.25V18.75C13.5 19.1642 13.1642 19.5 12.75 19.5H11.25C10.8358 19.5 10.5 19.1642 10.5 18.75V17.25Z"
      fill={fill}
    />
    <path
      d="M17.25 16.5C16.8358 16.5 16.5 16.8358 16.5 17.25V18.75C16.5 19.1642 16.8358 19.5 17.25 19.5H18.75C19.1642 19.5 19.5 19.1642 19.5 18.75V17.25C19.5 16.8358 19.1642 16.5 18.75 16.5H17.25Z"
      fill={fill}
    />
    <path
      d="M21 1.5C22.6569 1.5 24 2.84315 24 4.5V19.5C24 21.1569 22.6569 22.5 21 22.5H3C1.34315 22.5 0 21.1569 0 19.5V4.5C0 2.84315 1.34315 1.5 3 1.5H21ZM3 21H21C21.8284 21 22.5 20.3284 22.5 19.5V7.5H1.5V19.5C1.5 20.3284 2.17157 21 3 21ZM3 3C2.17157 3 1.5 3.67157 1.5 4.5V6H22.5V4.5C22.5 3.67157 21.8284 3 21 3H3Z"
      fill={fill}
    />
  </svg>
);

IconWindowDock.defaultProps = {
  ...iconDefaultProps,
};

export default IconWindowDock;
