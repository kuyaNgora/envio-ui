import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconImage2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 25" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 17.834C19 18.478 18.552 19 18 19H6L13.566 12.183C13.812 11.938 14.258 11.939 14.499 12.182L19 16.66V17.834ZM8 7C8.828 7 9.5 7.672 9.5 8.5C9.5 9.328 8.828 10 8 10C7.172 10 6.5 9.328 6.5 8.5C6.5 7.672 7.172 7 8 7ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
      fill={fill}
    />
  </svg>
);

IconImage2.defaultProps = {
  ...iconDefaultProps,
};

export default IconImage2;
