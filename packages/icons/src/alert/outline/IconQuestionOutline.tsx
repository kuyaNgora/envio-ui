import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconQuestion: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4C14.757 4 17 6.243 17 9C17 11.414 15.279 13.435 13 13.898V15C13 15.553 12.553 16 12 16C11.447 16 11 15.553 11 15V13C11 12.447 11.447 12 12 12C13.654 12 15 10.654 15 9C15 7.346 13.654 6 12 6C10.346 6 9 7.346 9 9C9 9.553 8.553 10 8 10C7.447 10 7 9.553 7 9C7 6.243 9.243 4 12 4ZM11 19C11 18.447 11.447 18 12 18C12.553 18 13 18.447 13 19C13 19.553 12.553 20 12 20C11.447 20 11 19.553 11 19Z"
      fill={fill}
    />
  </svg>
);

IconQuestion.defaultProps = {
  ...iconDefaultProps,
};

export default IconQuestion;
