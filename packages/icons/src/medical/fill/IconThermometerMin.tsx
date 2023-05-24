import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconThermometerMin: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 5V9.54H15V5C15 4.449 15.448 4 16 4C16.267 4 16.514 4.102 16.713 4.306C16.897 4.487 17 4.733 17 5ZM11 17C11 19.757 13.243 22 16 22C18.757 22 21 19.757 21 17C21 15.42 20.246 13.937 19 13.003V5C19 4.189 18.684 3.434 18.127 2.892C17.566 2.317 16.812 2 16 2C14.346 2 13 3.346 13 5V13.003C11.754 13.937 11 15.42 11 17ZM5 7H9C9.55 7 10 6.55 10 6C10 5.45 9.55 5 9 5H5C4.45 5 4 5.45 4 6C4 6.55 4.45 7 5 7Z"
      fill={fill}
    />
  </svg>
);

IconThermometerMin.defaultProps = {
  ...iconDefaultProps,
};

export default IconThermometerMin;
