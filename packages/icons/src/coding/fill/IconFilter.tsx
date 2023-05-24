import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconFilter: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.9033 21C13.6893 21 13.4773 20.932 13.3003 20.797L9.27426 17.752C9.02426 17.563 8.87726 17.268 8.87726 16.955V13.681L4.11126 4.459C3.95126 4.149 3.96426 3.778 4.14626 3.48C4.32726 3.182 4.65126 3 5.00026 3H19.0003C19.3523 3 19.6783 3.185 19.8593 3.488C20.0393 3.79 20.0473 4.166 19.8803 4.475L14.9033 13.69V20C14.9033 20.379 14.6883 20.726 14.3483 20.896C14.2073 20.965 14.0553 21 13.9033 21Z"
      fill={fill}
    />
  </svg>
);

IconFilter.defaultProps = {
  ...iconDefaultProps,
};

export default IconFilter;
