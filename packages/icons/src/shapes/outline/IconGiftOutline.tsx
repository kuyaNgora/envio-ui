import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconGift: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 19H17.5V15H13V19ZM6.5 19H11V15H6.5V19ZM5 9.2C5 9.117 5.013 9.05 5.026 9H8.143H11V13H5.026C5.013 12.95 5 12.883 5 12.8V9.2ZM7 6C7 5.448 7.513 5 8.143 5C9.4 5 10.17 6.09 10.594 7H8.143C7.513 7 7 6.552 7 6ZM15.857 5C16.487 5 17 5.448 17 6C17 6.552 16.487 7 15.857 7H13.4C13.82 6.09 14.588 5 15.857 5ZM19 9.2V12.8C19 12.883 18.987 12.95 18.974 13H13V9H15.857H18.974C18.987 9.05 19 9.117 19 9.2ZM19.2 7H18.807C18.925 6.686 19 6.353 19 6C19 4.346 17.59 3 15.857 3C13.935 3 12.729 4.199 12 5.397C11.271 4.199 10.065 3 8.143 3C6.41 3 5 4.346 5 6C5 6.353 5.076 6.686 5.193 7H4.8C3.791 7 3 7.967 3 9.2V12.8C3 13.907 3.64 14.793 4.5 14.964V19.333C4.5 20.252 5.313 21 6.312 21H17.687C18.687 21 19.5 20.252 19.5 19.333V14.964C20.36 14.793 21 13.907 21 12.8V9.2C21 7.967 20.209 7 19.2 7Z"
      fill={fill}
    />
  </svg>
);

IconGift.defaultProps = {
  ...iconDefaultProps,
};

export default IconGift;
