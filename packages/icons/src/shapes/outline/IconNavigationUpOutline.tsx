import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconNavigationUp: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 13.6797C12.192 13.6797 12.385 13.7357 12.552 13.8457L17.432 17.0767L12 6.21372L6.568 17.0767L11.448 13.8457C11.615 13.7357 11.808 13.6797 12 13.6797ZM20 20.9777C19.808 20.9777 19.616 20.9227 19.448 20.8117L12 15.8787L4.552 20.8117C4.174 21.0607 3.676 21.0267 3.337 20.7267C2.998 20.4257 2.903 19.9357 3.105 19.5307L11.105 3.53072C11.444 2.85272 12.556 2.85272 12.895 3.53072L20.895 19.5307C21.097 19.9357 21.002 20.4257 20.663 20.7267C20.475 20.8927 20.238 20.9777 20 20.9777Z"
      fill={fill}
    />
  </svg>
);

IconNavigationUp.defaultProps = {
  ...iconDefaultProps,
};

export default IconNavigationUp;
