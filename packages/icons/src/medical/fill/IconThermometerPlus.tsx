import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconThermometerPlus: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 9.54V5C17 4.733 16.897 4.487 16.713 4.306C16.514 4.102 16.267 4 16 4C15.448 4 15 4.449 15 5V9.54H17ZM16 22C13.243 22 11 19.757 11 17C11 15.42 11.754 13.937 13 13.003V5C13 3.346 14.346 2 16 2C16.812 2 17.566 2.317 18.127 2.892C18.684 3.434 19 4.189 19 5V13.003C20.246 13.937 21 15.42 21 17C21 19.757 18.757 22 16 22ZM6 7H5C4.45 7 4 6.55 4 6C4 5.45 4.45 5 5 5H6V4C6 3.45 6.45 3 7 3C7.55 3 8 3.45 8 4V5H9C9.55 5 10 5.45 10 6C10 6.55 9.55 7 9 7H8V8C8 8.55 7.55 9 7 9C6.45 9 6 8.55 6 8V7Z"
      fill={fill}
    />
  </svg>
);

IconThermometerPlus.defaultProps = {
  ...iconDefaultProps,
};

export default IconThermometerPlus;
