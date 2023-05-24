import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconEye: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10.5007C11.173 10.5007 10.5 11.1737 10.5 12.0007C10.5 12.8277 11.173 13.5007 12 13.5007C12.827 13.5007 13.5 12.8277 13.5 12.0007C13.5 11.1737 12.827 10.5007 12 10.5007ZM12 15.5007C10.07 15.5007 8.5 13.9307 8.5 12.0007C8.5 10.0707 10.07 8.50074 12 8.50074C13.93 8.50074 15.5 10.0707 15.5 12.0007C15.5 13.9307 13.93 15.5007 12 15.5007ZM21.868 11.5027C21.229 10.3907 17.706 4.81674 11.729 5.00374C6.202 5.14474 2.986 10.0147 2.132 11.5027C1.956 11.8117 1.956 12.1897 2.132 12.4987C2.762 13.5957 6.162 19.0007 12.025 19.0007C12.106 19.0007 12.188 18.9997 12.271 18.9977C17.798 18.8567 21.014 13.9867 21.868 12.4987C22.044 12.1897 22.044 11.8117 21.868 11.5027Z"
      fill={fill}
    />
  </svg>
);

IconEye.defaultProps = {
  ...iconDefaultProps,
};

export default IconEye;
