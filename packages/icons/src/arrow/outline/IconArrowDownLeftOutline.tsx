import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowDownLeft: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.707 6.29325C17.316 5.90225 16.684 5.90225 16.293 6.29325L8 14.5863V9.00025C8 8.44825 7.553 8.00025 7 8.00025C6.447 8.00025 6 8.44825 6 9.00025V17.0002C6 17.5522 6.447 18.0002 7 18.0002H15C15.553 18.0002 16 17.5522 16 17.0002C16 16.4482 15.553 16.0002 15 16.0002H9.414L17.707 7.70725C18.098 7.31625 18.098 6.68425 17.707 6.29325Z"
      fill={fill}
    />
  </svg>
);

IconArrowDownLeft.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowDownLeft;
