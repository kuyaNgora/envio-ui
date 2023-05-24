import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowUpTurnLeft: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 10H7.581L10.281 6.62504C10.626 6.19304 10.556 5.56404 10.125 5.21904C9.694 4.87504 9.064 4.94304 8.719 5.37504L4.719 10.375C4.427 10.741 4.427 11.259 4.719 11.625L8.719 16.625C8.917 16.872 9.207 17 9.5 17C9.72 17 9.94 16.928 10.125 16.781C10.556 16.436 10.626 15.807 10.281 15.375L7.581 12H16.5C17.051 12 17.5 12.449 17.5 13V18C17.5 18.552 17.948 19 18.5 19C19.052 19 19.5 18.552 19.5 18V13C19.5 11.346 18.154 10 16.5 10Z"
      fill={fill}
    />
  </svg>
);

IconArrowUpTurnLeft.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowUpTurnLeft;
