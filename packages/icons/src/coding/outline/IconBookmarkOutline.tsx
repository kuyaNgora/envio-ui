import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconBookmark: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.821 15.5055C11.99 15.5055 12.16 15.5485 12.313 15.6345L17 18.2855V5.33351C17 5.13251 16.879 4.99951 16.8 4.99951H7.2C7.12 4.99951 7 5.13251 7 5.33351V18.2335L11.306 15.6485C11.465 15.5535 11.643 15.5055 11.821 15.5055ZM6 20.9995C5.83 20.9995 5.66 20.9565 5.507 20.8695C5.194 20.6925 5 20.3595 5 19.9995V5.33351C5 4.04651 5.987 2.99951 7.2 2.99951H16.8C18.013 2.99951 19 4.04651 19 5.33351V19.9995C19 20.3555 18.811 20.6845 18.504 20.8635C18.196 21.0435 17.818 21.0465 17.508 20.8705L11.836 17.6625L6.514 20.8575C6.356 20.9515 6.178 20.9995 6 20.9995Z"
      fill={fill}
    />
  </svg>
);

IconBookmark.defaultProps = {
  ...iconDefaultProps,
};

export default IconBookmark;
