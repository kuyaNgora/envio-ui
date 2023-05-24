import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCheckSquare: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 12.833C19 12.281 19.448 11.833 20 11.833C20.552 11.833 21 12.281 21 12.833V18.399C21 19.833 19.833 21 18.4 21H5.6C4.167 21 3 19.833 3 18.399V5.6C3 4.166 4.167 3 5.6 3H15.167C15.719 3 16.167 3.447 16.167 4C16.167 4.552 15.719 5 15.167 5H5.6C5.269 5 5 5.269 5 5.6V18.399C5 18.73 5.269 19 5.6 19H18.4C18.731 19 19 18.73 19 18.399V12.833ZM9.3096 10.946C9.7096 10.564 10.3416 10.58 10.7236 10.979L12.2286 12.557L18.2816 6.304C18.6646 5.908 19.2976 5.896 19.6956 6.281C20.0926 6.665 20.1026 7.298 19.7186 7.695L12.9416 14.695C12.7536 14.89 12.4946 15 12.2236 15H12.2196C11.9476 14.999 11.6876 14.887 11.4996 14.69L9.2766 12.36C8.8946 11.96 8.9106 11.327 9.3096 10.946Z"
      fill={fill}
    />
  </svg>
);

IconCheckSquare.defaultProps = {
  ...iconDefaultProps,
};

export default IconCheckSquare;
