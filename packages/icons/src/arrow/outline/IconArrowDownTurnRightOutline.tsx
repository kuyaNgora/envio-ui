import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowDownTurnRight: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.281 12.375L15.281 7.375C14.936 6.943 14.306 6.874 13.876 7.219C13.444 7.563 13.374 8.193 13.719 8.624L16.42 12H7.5C6.949 12 6.5 11.551 6.5 11V6C6.5 5.447 6.052 5 5.5 5C4.948 5 4.5 5.447 4.5 6V11C4.5 12.654 5.846 14 7.5 14H16.42L13.719 17.375C13.374 17.806 13.444 18.436 13.876 18.78C14.06 18.928 14.281 19 14.5 19C14.793 19 15.084 18.871 15.281 18.624L19.281 13.624C19.573 13.259 19.573 12.74 19.281 12.375Z"
      fill={fill}
    />
  </svg>
);

IconArrowDownTurnRight.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowDownTurnRight;
