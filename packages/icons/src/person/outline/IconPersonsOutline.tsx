import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPersons: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 19C22 19.552 21.553 20 21 20C20.447 20 20 19.552 20 19C20 17.346 18.654 16 17 16C16.317 16 15.668 16.234 15.144 16.649C15.688 17.645 16 18.787 16 20C16 20.552 15.553 21 15 21C14.447 21 14 20.552 14 20C14 17.243 11.757 15 9 15C6.243 15 4 17.243 4 20C4 20.552 3.553 21 3 21C2.447 21 2 20.552 2 20C2 16.14 5.141 13 9 13C10.927 13 12.673 13.783 13.94 15.046C14.809 14.374 15.879 14 17 14C19.757 14 22 16.243 22 19ZM17 9C17.552 9 18 9.449 18 10C18 10.551 17.552 11 17 11C16.448 11 16 10.551 16 10C16 9.449 16.448 9 17 9ZM17 13C18.654 13 20 11.654 20 10C20 8.346 18.654 7 17 7C15.346 7 14 8.346 14 10C14 11.654 15.346 13 17 13ZM9 5C10.103 5 11 5.897 11 7C11 8.103 10.103 9 9 9C7.897 9 7 8.103 7 7C7 5.897 7.897 5 9 5ZM9 11C11.206 11 13 9.206 13 7C13 4.794 11.206 3 9 3C6.794 3 5 4.794 5 7C5 9.206 6.794 11 9 11Z"
      fill={fill}
    />
  </svg>
);

IconPersons.defaultProps = {
  ...iconDefaultProps,
};

export default IconPersons;
