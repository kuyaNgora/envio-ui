import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowCircleUp: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.31 10.139L11.31 7.277C11.355 7.234 11.411 7.213 11.461 7.18C11.515 7.144 11.563 7.101 11.623 7.076C11.744 7.027 11.872 7 12 7C12.131 7 12.261 7.027 12.383 7.077C12.505 7.128 12.616 7.201 12.708 7.294L15.707 10.293C16.098 10.684 16.098 11.317 15.707 11.707C15.317 12.098 14.684 12.098 14.293 11.707L13 10.414V16C13 16.553 12.553 17 12 17C11.448 17 11 16.553 11 16V10.337L9.691 11.586C9.291 11.967 8.659 11.953 8.277 11.553C7.895 11.153 7.911 10.52 8.31 10.139ZM12 22C17.515 22 22 17.514 22 12C22 6.486 17.515 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22Z"
      fill={fill}
    />
  </svg>
);

IconArrowCircleUp.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowCircleUp;
