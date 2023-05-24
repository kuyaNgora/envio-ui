import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconUmbrela: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.063 11C4.556 7.06 7.928 4 12 4C16.073 4 19.445 7.06 19.938 11H4.063ZM12 2C6.487 2 2 6.486 2 12C2 12.553 2.448 13 3.001 13H11V19C11 20.654 12.346 22 14.001 22C15.655 22 17.001 20.654 17.001 19C17.001 18.447 16.553 18 16.001 18C15.448 18 15.001 18.447 15.001 19C15.001 19.552 14.552 20 14.001 20C13.449 20 13.001 19.552 13.001 19V13H21C21.553 13 22 12.553 22 12C22 6.486 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconUmbrela.defaultProps = {
  ...iconDefaultProps,
};

export default IconUmbrela;
