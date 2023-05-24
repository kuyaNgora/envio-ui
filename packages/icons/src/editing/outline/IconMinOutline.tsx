import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconMin: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z"
      fill={fill}
    />
  </svg>
);

IconMin.defaultProps = {
  ...iconDefaultProps,
};

export default IconMin;
