import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconGridRound: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 20C18.447 20 18 19.553 18 19C18 18.447 18.447 18 19 18C19.553 18 20 18.447 20 19C20 19.553 19.553 20 19 20ZM19 16C17.346 16 16 17.346 16 19C16 20.654 17.346 22 19 22C20.654 22 22 20.654 22 19C22 17.346 20.654 16 19 16ZM12 20C11.447 20 11 19.553 11 19C11 18.447 11.447 18 12 18C12.553 18 13 18.447 13 19C13 19.553 12.553 20 12 20ZM12 16C10.346 16 9 17.346 9 19C9 20.654 10.346 22 12 22C13.654 22 15 20.654 15 19C15 17.346 13.654 16 12 16ZM5 20C4.447 20 4 19.553 4 19C4 18.447 4.447 18 5 18C5.553 18 6 18.447 6 19C6 19.553 5.553 20 5 20ZM5 16C3.346 16 2 17.346 2 19C2 20.654 3.346 22 5 22C6.654 22 8 20.654 8 19C8 17.346 6.654 16 5 16ZM19 13C18.447 13 18 12.553 18 12C18 11.447 18.447 11 19 11C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13ZM19 9C17.346 9 16 10.346 16 12C16 13.654 17.346 15 19 15C20.654 15 22 13.654 22 12C22 10.346 20.654 9 19 9ZM12 13C11.447 13 11 12.553 11 12C11 11.447 11.447 11 12 11C12.553 11 13 11.447 13 12C13 12.553 12.553 13 12 13ZM12 9C10.346 9 9 10.346 9 12C9 13.654 10.346 15 12 15C13.654 15 15 13.654 15 12C15 10.346 13.654 9 12 9ZM5 13C4.447 13 4 12.553 4 12C4 11.447 4.447 11 5 11C5.553 11 6 11.447 6 12C6 12.553 5.553 13 5 13ZM5 9C3.346 9 2 10.346 2 12C2 13.654 3.346 15 5 15C6.654 15 8 13.654 8 12C8 10.346 6.654 9 5 9ZM19 4C19.553 4 20 4.447 20 5C20 5.553 19.553 6 19 6C18.447 6 18 5.553 18 5C18 4.447 18.447 4 19 4ZM19 8C20.654 8 22 6.654 22 5C22 3.346 20.654 2 19 2C17.346 2 16 3.346 16 5C16 6.654 17.346 8 19 8ZM12 6C11.447 6 11 5.552 11 5C11 4.447 11.447 4 12 4C12.553 4 13 4.447 13 5C13 5.552 12.553 6 12 6ZM12 2C10.346 2 9 3.346 9 5C9 6.654 10.346 8 12 8C13.654 8 15 6.654 15 5C15 3.346 13.654 2 12 2ZM5 6C4.447 6 4 5.553 4 5C4 4.447 4.447 4 5 4C5.553 4 6 4.447 6 5C6 5.553 5.553 6 5 6ZM5 2C3.346 2 2 3.346 2 5C2 6.654 3.346 8 5 8C6.654 8 8 6.654 8 5C8 3.346 6.654 2 5 2Z"
      fill={fill}
    />
  </svg>
);

IconGridRound.defaultProps = {
  ...iconDefaultProps,
};

export default IconGridRound;
