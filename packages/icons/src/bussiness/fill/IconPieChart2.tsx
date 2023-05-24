import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPieChart2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.9346 11.9777H21.0836C21.6256 11.9777 22.0496 12.4497 21.9956 12.9887C21.4516 18.4147 16.5796 22.5667 10.8816 21.9367C6.29663 21.4307 2.56963 17.7037 2.06263 13.1187C1.43463 7.42065 5.58463 2.54765 11.0116 2.00465C11.5516 1.95065 12.0226 2.37365 12.0226 2.91565V11.0667C12.0226 11.5697 12.4306 11.9777 12.9346 11.9777ZM21.1671 10.3332H14.5001C14.0401 10.3332 13.6671 9.96115 13.6671 9.50015V2.83315C13.6671 2.37315 14.0401 2.00015 14.5001 2.00015C18.6351 2.00015 22.0001 5.36415 22.0001 9.50015C22.0001 9.96115 21.6271 10.3332 21.1671 10.3332Z"
      fill={fill}
    />
  </svg>
);

IconPieChart2.defaultProps = {
  ...iconDefaultProps,
};

export default IconPieChart2;
