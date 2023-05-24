import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowCircleLeft: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.139 15.69L7.277 12.69C7.234 12.645 7.213 12.589 7.18 12.539C7.144 12.485 7.101 12.437 7.076 12.377C7.027 12.256 7 12.128 7 12C7 11.869 7.027 11.739 7.077 11.617C7.128 11.495 7.201 11.384 7.294 11.292L10.293 8.293C10.684 7.902 11.317 7.902 11.707 8.293C12.098 8.683 12.098 9.316 11.707 9.707L10.414 11H16C16.553 11 17 11.447 17 12C17 12.552 16.553 13 16 13H10.337L11.586 14.309C11.967 14.709 11.953 15.341 11.553 15.723C11.153 16.105 10.52 16.089 10.139 15.69ZM22 12C22 6.485 17.514 2 12 2C6.486 2 2 6.485 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12Z"
      fill={fill}
    />
  </svg>
);

IconArrowCircleLeft.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowCircleLeft;
