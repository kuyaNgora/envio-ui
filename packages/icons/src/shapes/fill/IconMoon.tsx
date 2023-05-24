import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconMoon: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 25 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2958 22.0006C12.2638 22.0006 12.2328 22.0006 12.1998 21.9996C9.40583 21.9756 6.79783 20.8546 4.85583 18.8466C1.17883 15.0416 1.06383 8.74455 4.59883 4.80955C5.69983 3.58255 7.04383 2.65955 8.59183 2.06655C8.95683 1.92455 9.37183 2.01255 9.65083 2.28855C9.93083 2.56355 10.0238 2.97655 9.88883 3.34455C8.77083 6.39955 9.53183 9.85555 11.8298 12.1486C14.1268 14.4416 17.5928 15.2026 20.6578 14.0866C21.0258 13.9506 21.4388 14.0466 21.7128 14.3246C21.9878 14.6046 22.0738 15.0196 21.9338 15.3846C21.4098 16.7476 20.6238 17.9576 19.5978 18.9806C17.6448 20.9306 15.0538 22.0006 12.2958 22.0006Z"
      fill={fill}
    />
  </svg>
);

IconMoon.defaultProps = {
  ...iconDefaultProps,
};

export default IconMoon;
