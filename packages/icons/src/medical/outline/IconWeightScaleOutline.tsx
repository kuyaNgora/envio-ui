import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconWeightScale: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 19C19 19.552 18.551 20 18 20H6C5.449 20 5 19.552 5 19V8C5 7.448 5.449 7 6 7H7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7H18C18.551 7 19 7.448 19 8V19ZM11 4.172V6C11 6.553 11.448 7 12 7C12.552 7 13 6.553 13 6V4.172C13.923 4.498 14.651 5.267 14.907 6.271C14.97 6.492 15 6.731 15 7C15 8.654 13.654 10 12 10C10.346 10 9 8.654 9 7C9 6.738 9.031 6.505 9.091 6.288C9.094 6.276 9.095 6.265 9.098 6.253L9.102 6.238C9.354 5.256 10.08 4.496 11 4.172ZM18 5H16.578C15.799 3.201 14.017 2 12 2C9.977 2 8.191 3.209 7.42 5H6C4.346 5 3 6.346 3 8V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V8C21 6.346 19.654 5 18 5Z"
      fill={fill}
    />
  </svg>
);

IconWeightScale.defaultProps = {
  ...iconDefaultProps,
};

export default IconWeightScale;
