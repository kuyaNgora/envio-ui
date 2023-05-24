import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconShield: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 25" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22.0001C11.661 22.0001 11.322 21.9161 11.021 21.7461L10.718 21.5751C5.957 18.8971 3 13.8411 3 8.37908V8.23408C3 7.51508 3.39 6.84708 4.018 6.49208L11.02 2.55408C11.625 2.21408 12.376 2.21308 12.979 2.55308L19.98 6.49108C20.61 6.84708 21 7.51508 21 8.23408V8.37908C21 13.8411 18.043 18.8971 13.282 21.5751L12.98 21.7451C12.678 21.9151 12.339 22.0001 12 22.0001Z"
      fill={fill}
    />
  </svg>
);

IconShield.defaultProps = {
  ...iconDefaultProps,
};

export default IconShield;
