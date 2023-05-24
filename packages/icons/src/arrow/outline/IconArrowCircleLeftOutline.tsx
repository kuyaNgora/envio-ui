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
      d="M16 11H10.336L11.586 9.69C11.967 9.291 11.952 8.658 11.553 8.276C11.153 7.896 10.521 7.91 10.139 8.31L7.276 11.31C7.238 11.35 7.221 11.4 7.19 11.445C7.149 11.504 7.103 11.558 7.076 11.626C7.039 11.717 7.027 11.812 7.019 11.909C7.016 11.94 7 11.968 7 12C7 12.002 7.001 12.003 7.001 12.005C7.002 12.135 7.027 12.264 7.078 12.386C7.128 12.507 7.202 12.616 7.293 12.708L10.293 15.707C10.488 15.902 10.744 16 11 16C11.256 16 11.512 15.902 11.707 15.707C12.098 15.316 12.098 14.684 11.707 14.293L10.414 13H16C16.552 13 17 12.552 17 12C17 11.448 16.552 11 16 11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconArrowCircleLeft.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowCircleLeft;
