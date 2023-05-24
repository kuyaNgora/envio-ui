import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconEnvelop: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 6L12.495 10.468C12.188 10.643 11.812 10.643 11.505 10.468L5 6H19ZM19 4H5C3.346 4 2 5.346 2 7V17C2 18.654 3.346 20 5 20H19C20.654 20 22 18.654 22 17V7C22 5.346 20.654 4 19 4Z"
      fill={fill}
    />
  </svg>
);

IconEnvelop.defaultProps = {
  ...iconDefaultProps,
};

export default IconEnvelop;
