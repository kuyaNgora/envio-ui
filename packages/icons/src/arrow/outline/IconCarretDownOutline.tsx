import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCarretDown: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 26 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.09175 9.5L13.0017 14.322L16.9867 9.5H9.09175ZM12.9997 16.5C12.4937 16.5 12.0097 16.267 11.6737 15.858L7.46075 10.76C6.95675 10.149 6.85675 9.282 7.20175 8.549C7.50675 7.902 8.11375 7.5 8.78675 7.5H17.2127C17.8857 7.5 18.4927 7.902 18.7977 8.549C19.1437 9.282 19.0427 10.149 18.5397 10.759L14.3257 15.858C13.9897 16.267 13.5057 16.5 12.9997 16.5Z"
      fill={fill}
    />
  </svg>
);

IconCarretDown.defaultProps = {
  ...iconDefaultProps,
};

export default IconCarretDown;
