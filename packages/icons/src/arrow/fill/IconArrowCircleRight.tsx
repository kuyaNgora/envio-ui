import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowCircleRight: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.861 8.31L16.723 11.31C16.766 11.355 16.787 11.411 16.82 11.461C16.856 11.515 16.899 11.563 16.924 11.623C16.973 11.744 17 11.872 17 12C17 12.131 16.973 12.261 16.923 12.383C16.872 12.505 16.799 12.616 16.706 12.708L13.707 15.707C13.316 16.098 12.683 16.098 12.293 15.707C11.902 15.317 11.902 14.684 12.293 14.293L13.586 13H8C7.447 13 7 12.553 7 12C7 11.448 7.447 11 8 11H13.663L12.414 9.691C12.033 9.291 12.047 8.659 12.447 8.277C12.847 7.895 13.48 7.911 13.861 8.31ZM2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12Z"
      fill={fill}
    />
  </svg>
);

IconArrowCircleRight.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowCircleRight;
