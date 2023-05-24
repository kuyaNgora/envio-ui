import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconShield: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 25" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4.29584L5 8.23384V8.37884C5 13.1188 7.566 17.5078 11.698 19.8328L12 20.0028L12.302 19.8328C16.434 17.5078 19 13.1188 19 8.37884V8.23384L12 4.29584ZM12 21.9998C11.661 21.9998 11.322 21.9158 11.021 21.7458L10.718 21.5748C5.957 18.8978 3 13.8408 3 8.37884V8.23384C3 7.51484 3.39 6.84684 4.018 6.49184L11.02 2.55384C11.625 2.21384 12.376 2.21284 12.979 2.55284L19.98 6.49084C20.61 6.84684 21 7.51484 21 8.23384V8.37884C21 13.8408 18.043 18.8978 13.282 21.5748L12.98 21.7448C12.678 21.9148 12.339 21.9998 12 21.9998Z"
      fill={fill}
    />
  </svg>
);

IconShield.defaultProps = {
  ...iconDefaultProps,
};

export default IconShield;
