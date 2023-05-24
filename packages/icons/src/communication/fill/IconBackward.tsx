import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconBackward: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.95 7.20121C19.216 6.85621 18.349 6.95821 17.741 7.46121L13 11.3772V8.78721C13 8.11421 12.597 7.50721 11.95 7.20121C11.216 6.85621 10.349 6.95821 9.741 7.46121L4.641 11.6742C4.234 12.0102 4 12.4942 4 13.0002C4 13.5062 4.234 13.9902 4.641 14.3262L9.741 18.5402C10.109 18.8442 10.573 19.0012 11.044 19.0012C11.351 19.0012 11.661 18.9342 11.95 18.7992C12.597 18.4932 13 17.8862 13 17.2132V14.6222L17.741 18.5402C18.109 18.8442 18.573 19.0012 19.044 19.0012C19.351 19.0012 19.661 18.9342 19.95 18.7992C20.597 18.4932 21 17.8862 21 17.2132V8.78721C21 8.11421 20.597 7.50721 19.95 7.20121Z"
      fill={fill}
    />
  </svg>
);

IconBackward.defaultProps = {
  ...iconDefaultProps,
};

export default IconBackward;
