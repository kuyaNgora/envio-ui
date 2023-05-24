import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconGoogle: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.4952 13.98C16.8292 16.122 15.1692 17.605 12.9602 17.932C9.58915 18.431 6.27915 15.875 6.01715 12.475C5.74515 8.947 8.52815 6 12.0012 6C12.8042 6 13.5702 6.158 14.2702 6.444C14.5132 6.543 14.7882 6.458 14.9122 6.228L16.3472 3.581C16.4832 3.328 16.3852 3.002 16.1232 2.884C14.8662 2.316 13.4722 2 12.0042 2C6.38215 2 1.84315 6.636 2.00415 12.293C2.15115 17.454 6.41115 21.772 11.5682 21.991C17.1142 22.225 21.7142 17.945 21.9932 12.522C22.0042 12.324 22.0002 11.171 21.9962 10.495C21.9952 10.219 21.7712 10 21.4962 10H12.4972C12.2212 10 11.9972 10.223 11.9972 10.5V13.48C11.9972 13.755 12.2212 13.98 12.4972 13.98H17.4952Z"
      fill={fill}
    />
  </svg>
);

IconGoogle.defaultProps = {
  ...iconDefaultProps,
};

export default IconGoogle;
