import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconTrash: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.451 2 7C2 7.55 2.45 8 3 8H4V19C4 20.655 5.346 22 7 22H17C18.654 22 20 20.655 20 19V8H21C21.55 8 22 7.55 22 7C22 6.451 21.55 6 21 6Z"
      fill={fill}
    />
  </svg>
);

IconTrash.defaultProps = {
  ...iconDefaultProps,
};

export default IconTrash;
