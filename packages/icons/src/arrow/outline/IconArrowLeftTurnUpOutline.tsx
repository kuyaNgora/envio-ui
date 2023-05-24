import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowLeftTurnUp: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.0001 17.5H13.0001C12.4491 17.5 12.0001 17.051 12.0001 16.5V7.581L15.3751 10.281C15.5601 10.428 15.7801 10.5 16.0001 10.5C16.2921 10.5 16.5831 10.372 16.7811 10.125C17.1261 9.693 17.0561 9.064 16.6251 8.719L11.6251 4.719C11.2591 4.427 10.7411 4.427 10.3751 4.719L5.37509 8.719C4.94409 9.064 4.87409 9.693 5.21909 10.125C5.56309 10.556 6.19409 10.625 6.62509 10.281L10.0001 7.581V16.5C10.0001 18.154 11.3461 19.5 13.0001 19.5H18.0001C18.5521 19.5 19.0001 19.052 19.0001 18.5C19.0001 17.948 18.5521 17.5 18.0001 17.5Z"
      fill={fill}
    />
  </svg>
);

IconArrowLeftTurnUp.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowLeftTurnUp;
