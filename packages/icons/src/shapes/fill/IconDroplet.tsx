import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconDroplet: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0221 20.9997C10.1705 20.9831 8.43691 20.2354 7.13907 18.8914C4.4723 16.1295 4.5083 11.6701 7.21937 8.94892L11.4969 4.65661C11.6714 4.4803 11.9095 4.38246 12.1578 4.3843C12.4061 4.38707 12.6425 4.48861 12.8151 4.66676L17.0234 9.02923C19.6901 11.792 19.6541 16.2523 16.9421 18.9708C15.6231 20.2935 13.8775 21.0145 12.024 20.9997H12.0221Z"
      fill={fill}
    />
  </svg>
);

IconDroplet.defaultProps = {
  ...iconDefaultProps,
};

export default IconDroplet;
