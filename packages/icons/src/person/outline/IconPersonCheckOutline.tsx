import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPersonCheck: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.49995 13C5.64095 13 2.49995 16.14 2.49995 20C2.49995 20.552 2.94695 21 3.49995 21C4.05295 21 4.49995 20.552 4.49995 20C4.49995 17.243 6.74295 15 9.49995 15C12.257 15 14.5 17.243 14.5 20C14.5 20.552 14.947 21 15.5 21C16.053 21 16.5 20.552 16.5 20C16.5 16.14 13.359 13 9.49995 13ZM7.49995 7C7.49995 8.103 8.39695 9 9.49995 9C10.603 9 11.5 8.103 11.5 7C11.5 5.897 10.603 5 9.49995 5C8.39695 5 7.49995 5.897 7.49995 7ZM5.49995 7C5.49995 4.794 7.29395 3 9.49995 3C11.706 3 13.5 4.794 13.5 7C13.5 9.206 11.706 11 9.49995 11C7.29395 11 5.49995 9.206 5.49995 7ZM21.255 5.656L18.645 8.656C18.456 8.873 18.184 8.998 17.896 9H17.89C17.605 9 17.334 8.879 17.145 8.667L15.755 7.114C15.387 6.702 15.422 6.07 15.833 5.702C16.246 5.333 16.878 5.368 17.245 5.78L17.879 6.489L19.745 4.344C20.108 3.926 20.739 3.883 21.156 4.246C21.573 4.608 21.617 5.24 21.255 5.656Z"
      fill={fill}
    />
  </svg>
);

IconPersonCheck.defaultProps = {
  ...iconDefaultProps,
};

export default IconPersonCheck;
