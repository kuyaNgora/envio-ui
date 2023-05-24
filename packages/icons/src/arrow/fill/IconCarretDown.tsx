import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCarretDown: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 26 25" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 17C12.494 17 12.01 16.767 11.674 16.358L7.46097 11.26C6.95697 10.649 6.85597 9.782 7.20197 9.049C7.50697 8.402 8.11397 8 8.78697 8H17.213C17.886 8 18.493 8.402 18.798 9.049C19.144 9.782 19.043 10.649 18.54 11.259L14.326 16.358C13.99 16.767 13.506 17 13 17Z"
      fill={fill}
    />
  </svg>
);

IconCarretDown.defaultProps = {
  ...iconDefaultProps,
};

export default IconCarretDown;
