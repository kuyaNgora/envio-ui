import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconToogleOff: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.01612 11.0119C8.46412 11.0119 8.01812 11.4599 8.01912 12.0119C8.01912 12.5629 8.46712 13.0099 9.01912 13.0089C9.57012 13.0079 10.0171 12.5599 10.0161 12.0089C10.0151 11.4569 9.56712 11.0109 9.01612 11.0119ZM9.02102 15.006C7.36902 15.008 6.02302 13.666 6.02102 12.014C6.01902 10.361 7.36102 9.01597 9.01302 9.01397C10.666 9.01197 12.011 10.354 12.013 12.006C12.015 13.658 10.673 15.004 9.02102 15.006ZM15 5.01197L9.00702 5.01997C5.15402 5.02497 2.02102 8.16497 2.02702 12.02C2.03202 15.873 5.17202 19.006 9.02702 19L15.019 18.992C18.873 18.987 22.005 15.847 22 11.992C21.995 8.13897 18.854 5.00597 15 5.01197Z"
      fill={fill}
    />
  </svg>
);

IconToogleOff.defaultProps = {
  ...iconDefaultProps,
};

export default IconToogleOff;
