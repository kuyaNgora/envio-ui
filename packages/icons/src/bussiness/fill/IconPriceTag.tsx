import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPriceTag: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.561 10.5619C9.97505 11.1479 9.02605 11.1479 8.44005 10.5619C7.85405 9.97595 7.85405 9.02595 8.44005 8.44095C9.02605 7.85495 9.97505 7.85495 10.561 8.44095C11.147 9.02595 11.147 9.97595 10.561 10.5619ZM20.468 10.5829L14.051 4.16595C13.886 4.00095 13.669 3.89895 13.437 3.87795L4.09305 3.00595C3.79605 2.97595 3.50405 3.08295 3.29305 3.29395C3.08205 3.50495 2.97705 3.79795 3.00405 4.09395L3.87605 13.4379C3.89905 13.6699 4.00005 13.8879 4.16505 14.0519L10.582 20.4699C10.937 20.8229 11.402 20.9999 11.867 20.9999C12.332 20.9999 12.797 20.8229 13.152 20.4689L20.468 13.1529C20.811 12.8109 21 12.3539 21 11.8679C21 11.3819 20.811 10.9259 20.468 10.5829Z"
      fill={fill}
    />
  </svg>
);

IconPriceTag.defaultProps = {
  ...iconDefaultProps,
};

export default IconPriceTag;
