import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconQuestionCircle: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 9.5C8.5 7.57 10.07 6 12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.08 14.44 12.403 13 12.837V14C13 14.553 12.553 15 12 15C11.447 15 11 14.553 11 14V12C11 11.447 11.447 11 12 11C12.827 11 13.5 10.327 13.5 9.5C13.5 8.673 12.827 8 12 8C11.173 8 10.5 8.673 10.5 9.5C10.5 10.053 10.053 10.5 9.5 10.5C8.947 10.5 8.5 10.053 8.5 9.5ZM11 17C11 16.447 11.447 16 12 16C12.553 16 13 16.447 13 17C13 17.553 12.553 18 12 18C11.447 18 11 17.553 11 17ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconQuestionCircle.defaultProps = {
  ...iconDefaultProps,
};

export default IconQuestionCircle;
