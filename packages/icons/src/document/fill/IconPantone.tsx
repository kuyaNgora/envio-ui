import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPantone: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 25" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 8H8.818V5H5V8ZM5 13H8.818V10H5V13ZM8.818 15H5V17.091C5 18.144 5.856 19 6.909 19C7.962 19 8.818 18.144 8.818 17.091V15ZM10.818 17.091C10.818 19.246 9.064 21 6.909 21C4.754 21 3 19.246 3 17.091V4C3 3.447 3.447 3 4 3H9.818C10.371 3 10.818 3.447 10.818 4V17.091ZM18.189 9.3L14.054 5.443C13.86 5.263 13.61 5.153 13.337 5.176C13.072 5.185 12.821 5.299 12.641 5.493L11.818 6.375V9.308V14.668V17.091C11.818 17.286 11.783 17.473 11.761 17.662L18.239 10.713C18.616 10.31 18.594 9.677 18.189 9.3ZM21 14.182V20C21 20.553 20.553 21 20 21H10.017L10.466 20.518L11.881 19L15.44 15.182L17.305 13.182H20C20.553 13.182 21 13.629 21 14.182Z"
      fill={fill}
    />
  </svg>
);

IconPantone.defaultProps = {
  ...iconDefaultProps,
};

export default IconPantone;
