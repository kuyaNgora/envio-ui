import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconAlertTriangle: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.0001 14C13.0001 14.552 12.5521 15 12.0001 15C11.4481 15 11.0001 14.552 11.0001 14V10C11.0001 9.448 11.4481 9 12.0001 9C12.5521 9 13.0001 9.448 13.0001 10V14ZM12.0001 18C11.4481 18 11.0001 17.552 11.0001 17C11.0001 16.448 11.4481 16 12.0001 16C12.5521 16 13.0001 16.448 13.0001 17C13.0001 17.552 12.5521 18 12.0001 18ZM22.5611 17.303L14.8891 4.584C14.2901 3.592 13.2101 3 12.0001 3C10.7901 3 9.71006 3.592 9.11106 4.584L1.43906 17.303C0.871058 18.246 0.854058 19.38 1.39406 20.336C1.97306 21.363 3.09806 22 4.32806 22H19.6721C20.9021 22 22.0271 21.363 22.6061 20.336C23.1461 19.38 23.1291 18.246 22.5611 17.303Z"
      fill={fill}
    />
  </svg>
);

IconAlertTriangle.defaultProps = {
  ...iconDefaultProps,
};

export default IconAlertTriangle;
