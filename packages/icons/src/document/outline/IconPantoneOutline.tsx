import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPantone: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 25" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 19H10.514L14.073 15.182H19V19ZM5 17.091V15H8.818V17.091C8.818 18.144 7.962 19 6.909 19C5.856 19 5 18.144 5 17.091ZM5 8H8.818V5H5V8ZM5 13H8.818V10H5V13ZM13.422 7.588L16.095 10.081L10.818 15.74V10.381L13.422 7.588ZM20 13.182H15.937L18.239 10.713C18.616 10.31 18.594 9.677 18.189 9.3L14.054 5.443C13.859 5.263 13.611 5.159 13.337 5.176C13.072 5.185 12.821 5.299 12.641 5.493L10.818 7.448V4C10.818 3.447 10.371 3 9.818 3H4C3.447 3 3 3.447 3 4V17.091C3 19.246 4.754 21 6.909 21H20C20.553 21 21 20.553 21 20V14.182C21 13.629 20.553 13.182 20 13.182Z"
      fill={fill}
    />
  </svg>
);

IconPantone.defaultProps = {
  ...iconDefaultProps,
};

export default IconPantone;
