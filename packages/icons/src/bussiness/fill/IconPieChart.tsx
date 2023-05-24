import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPieChart: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.2734 8.66676C19.9074 6.11576 17.8844 4.09276 15.3334 3.72676V8.66676H20.2734ZM21.1665 10.3328H14.5004C14.0404 10.3328 13.6664 9.96076 13.6664 9.49976V2.83276C13.6664 2.37276 14.0404 1.99976 14.5004 1.99976C18.6355 1.99976 22.0005 5.36476 22.0005 9.49976C22.0005 9.96076 21.6264 10.3328 21.1665 10.3328ZM12.9344 11.9778H21.0834C21.6254 11.9778 22.0494 12.4498 21.9954 12.9888C21.4514 18.4148 16.5794 22.5668 10.8814 21.9368C6.29645 21.4308 2.56945 17.7038 2.06245 13.1188C1.43445 7.42076 5.58445 2.54776 11.0114 2.00476C11.5514 1.95076 12.0224 2.37376 12.0224 2.91576V11.0668C12.0224 11.5698 12.4304 11.9778 12.9344 11.9778Z"
      fill={fill}
    />
  </svg>
);

IconPieChart.defaultProps = {
  ...iconDefaultProps,
};

export default IconPieChart;
