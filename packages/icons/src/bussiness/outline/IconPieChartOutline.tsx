import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPieChart: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.821 14.0576C20.298 13.8716 19.728 14.1446 19.545 14.6666C18.417 17.8566 15.384 19.9996 12 19.9996C7.589 19.9996 4 16.4116 4 11.9996C4 8.6156 6.143 5.5826 9.333 4.4546C9.854 4.2716 10.127 3.7006 9.943 3.1796C9.759 2.6596 9.188 2.3856 8.667 2.5706C4.679 3.9796 2 7.7686 2 11.9996C2 17.5136 6.486 21.9996 12 21.9996C16.231 21.9996 20.02 19.3216 21.43 15.3326C21.614 14.8126 21.342 14.2416 20.821 14.0576ZM13.9997 10V4.071C17.0607 4.511 19.4887 6.938 19.9287 10H13.9997ZM12.9997 2C12.4477 2 11.9997 2.447 11.9997 3V11C11.9997 11.553 12.4477 12 12.9997 12H20.9997C21.5517 12 21.9997 11.553 21.9997 11C21.9997 6.037 17.9617 2 12.9997 2Z"
      fill={fill}
    />
  </svg>
);

IconPieChart.defaultProps = {
  ...iconDefaultProps,
};

export default IconPieChart;
