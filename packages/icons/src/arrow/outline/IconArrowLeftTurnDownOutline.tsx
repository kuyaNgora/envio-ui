import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowLeftTurnDown: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 4.5H13.0001C11.3461 4.5 10.0001 5.846 10.0001 7.5V16.419L6.62513 13.719C6.19414 13.375 5.56314 13.444 5.21915 13.875C4.87415 14.307 4.94415 14.936 5.37515 15.281L10.3751 19.281C10.5581 19.427 10.7791 19.5 11.0001 19.5C11.2211 19.5 11.4421 19.427 11.6251 19.281L16.625 15.281C17.056 14.936 17.126 14.307 16.781 13.875C16.437 13.444 15.807 13.374 15.375 13.719L12.0001 16.419V7.5C12.0001 6.949 12.4491 6.5 13.0001 6.5H18C18.552 6.5 19 6.052 19 5.5C19 4.948 18.552 4.5 18 4.5Z"
      fill={fill}
    />
  </svg>
);

IconArrowLeftTurnDown.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowLeftTurnDown;
