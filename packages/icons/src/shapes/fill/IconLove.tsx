import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconLove: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.9999 21C12.7339 21 12.4799 20.895 12.2919 20.706L4.52492 12.926C2.48892 10.886 2.48892 7.567 4.52492 5.527C5.50792 4.543 6.82092 4 8.21992 4C9.61893 4 10.9319 4.543 11.9149 5.527L12.9999 6.614L14.0839 5.528C15.0679 4.543 16.3809 4 17.7799 4C19.1789 4 20.4919 4.543 21.4749 5.527C23.5109 7.567 23.5109 10.886 21.4759 12.926L13.7079 20.707C13.5199 20.895 13.2659 21 12.9999 21Z"
      fill={fill}
    />
  </svg>
);

IconLove.defaultProps = {
  ...iconDefaultProps,
};

export default IconLove;
