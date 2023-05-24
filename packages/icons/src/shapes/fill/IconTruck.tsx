import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconTruck: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 18C19 18.552 18.552 19 18 19C17.448 19 17 18.552 17 18C17 17.448 17.448 17 18 17C18.552 17 19 17.448 19 18ZM7 18C7 18.552 6.552 19 6 19C5.448 19 5 18.552 5 18C5 17.448 5.448 17 6 17C6.552 17 7 17.448 7 18ZM20 12.48V15H17V10.081L20 12.48ZM21.625 11.219L17 7.519V5C17 3.897 16.187 3 15.187 3H3.812C2.813 3 2 3.897 2 5V15C2 15.873 2.513 16.609 3.221 16.882C3.081 17.228 3 17.604 3 18C3 19.654 4.346 21 6 21C7.654 21 9 19.654 9 18C9 17.647 8.928 17.314 8.815 17H12H15.185C15.072 17.314 15 17.647 15 18C15 19.654 16.346 21 18 21C19.654 21 21 19.654 21 18C21 17.647 20.928 17.314 20.815 17H21C21.553 17 22 16.553 22 16V12C22 11.696 21.862 11.409 21.625 11.219Z"
      fill={fill}
    />
  </svg>
);

IconTruck.defaultProps = {
  ...iconDefaultProps,
};

export default IconTruck;
