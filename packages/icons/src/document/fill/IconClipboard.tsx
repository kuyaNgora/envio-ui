import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconClipboard: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 8H16C16.552 8 17 7.553 17 7V3C17 2.447 16.552 2 16 2H8C7.448 2 7 2.447 7 3V7C7 7.553 7.448 8 8 8ZM18 7V4C19.654 4 21 5.346 21 7V19C21 20.654 19.654 22 18 22H6C4.346 22 3 20.654 3 19V7C3 5.346 4.346 4 6 4V7C6 8.103 6.897 9 8 9H16C17.103 9 18 8.103 18 7Z"
      fill={fill}
    />
  </svg>
);

IconClipboard.defaultProps = {
  ...iconDefaultProps,
};

export default IconClipboard;
