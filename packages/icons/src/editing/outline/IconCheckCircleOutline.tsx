import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCheckCircle: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.997 10.9741H21C21.551 10.9741 21.999 11.4201 22 11.9711C22.008 14.6421 20.975 17.1571 19.091 19.0511C17.208 20.9451 14.7 21.9921 12.029 22.0001H12C9.339 22.0001 6.836 20.9681 4.949 19.0911C3.055 17.2081 2.008 14.7001 2 12.0291C1.992 9.35712 3.025 6.84312 4.909 4.94912C6.792 3.05512 9.3 2.00812 11.971 2.00012C12.766 2.01212 13.576 2.09212 14.352 2.27812C14.888 2.40812 15.219 2.94812 15.089 3.48512C14.96 4.02112 14.417 4.35112 13.883 4.22312C13.262 4.07312 12.603 4.01012 11.977 4.00012C9.84 4.00612 7.833 4.84412 6.327 6.35912C4.82 7.87412 3.994 9.88612 4 12.0231C4.006 14.1601 4.844 16.1661 6.359 17.6731C7.869 19.1741 9.871 20.0001 12 20.0001H12.023C14.16 19.9941 16.167 19.1561 17.673 17.6411C19.18 16.1251 20.006 14.1141 20 11.9771C19.999 11.4251 20.445 10.9751 20.997 10.9741ZM8.293 11.293C8.684 10.902 9.316 10.902 9.707 11.293L11.951 13.537L18.248 6.34102C18.612 5.92802 19.243 5.88402 19.659 6.24802C20.074 6.61102 20.116 7.24302 19.752 7.65902L12.752 15.659C12.57 15.867 12.31 15.99 12.033 16H12C11.735 16 11.481 15.895 11.293 15.707L8.293 12.707C7.902 12.316 7.902 11.684 8.293 11.293Z"
      fill={fill}
    />
  </svg>
);

IconCheckCircle.defaultProps = {
  ...iconDefaultProps,
};

export default IconCheckCircle;
