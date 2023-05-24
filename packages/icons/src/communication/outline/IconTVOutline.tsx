import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconTV: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 19.0002C19 19.5522 18.552 20.0002 18 20.0002H6C5.448 20.0002 5 19.5522 5 19.0002V9.00025C5 8.44825 5.448 8.00025 6 8.00025H18C18.552 8.00025 19 8.44825 19 9.00025V19.0002ZM18 6.00025H14.414L16.707 3.70725C17.098 3.31625 17.098 2.68425 16.707 2.29325C16.316 1.90225 15.684 1.90225 15.293 2.29325L12 5.58625L8.707 2.29325C8.316 1.90225 7.684 1.90225 7.293 2.29325C6.902 2.68425 6.902 3.31625 7.293 3.70725L9.586 6.00025H6C4.346 6.00025 3 7.34625 3 9.00025V19.0002C3 20.6542 4.346 22.0002 6 22.0002H18C19.654 22.0002 21 20.6542 21 19.0002V9.00025C21 7.34625 19.654 6.00025 18 6.00025Z"
      fill={fill}
    />
  </svg>
);

IconTV.defaultProps = {
  ...iconDefaultProps,
};

export default IconTV;
