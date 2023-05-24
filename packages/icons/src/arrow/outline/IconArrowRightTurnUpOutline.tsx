import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowRightTurnUp: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.6248 8.719L13.6248 4.719C13.2598 4.427 12.7408 4.427 12.3758 4.719L7.37577 8.719C6.94377 9.064 6.87477 9.693 7.21977 10.124C7.56377 10.555 8.19377 10.625 8.62477 10.281L11.9998 7.58V16.5C11.9998 17.051 11.5518 17.5 10.9998 17.5H5.99977C5.44777 17.5 4.99977 17.948 4.99977 18.5C4.99977 19.052 5.44777 19.5 5.99977 19.5H10.9998C12.6548 19.5 13.9998 18.154 13.9998 16.5V7.58L17.3758 10.281C17.5598 10.428 17.7808 10.5 17.9998 10.5C18.2928 10.5 18.5838 10.371 18.7808 10.124C19.1258 9.693 19.0568 9.064 18.6248 8.719Z"
      fill={fill}
    />
  </svg>
);

IconArrowRightTurnUp.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowRightTurnUp;
