import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconUmbrela: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.486 2 2 6.486 2 12C2 12.553 2.447 13 3 13H11V19C11 20.654 12.346 22 14 22C15.654 22 17 20.654 17 19C17 18.447 16.553 18 16 18C15.447 18 15 18.447 15 19C15 19.552 14.552 20 14 20C13.448 20 13 19.552 13 19V13H21C21.553 13 22 12.553 22 12C22 6.486 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconUmbrela.defaultProps = {
  ...iconDefaultProps,
};

export default IconUmbrela;
