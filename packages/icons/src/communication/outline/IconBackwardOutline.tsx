import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconBackward: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5 16.9852L13.678 13.0022L18.5 9.09121V16.9852ZM10.5 16.9852L5.678 13.0022L10.5 9.09121V16.9852ZM19.45 7.20121C18.716 6.85621 17.849 6.95821 17.241 7.46121L12.5 11.3772V8.78721C12.5 8.11421 12.098 7.50621 11.45 7.20121C10.716 6.85621 9.849 6.95821 9.241 7.46121L4.141 11.6732C3.734 12.0092 3.5 12.4942 3.5 13.0002C3.5 13.5062 3.734 13.9902 4.142 14.3262L9.241 18.5402C9.609 18.8432 10.073 19.0012 10.544 19.0012C10.851 19.0012 11.161 18.9342 11.45 18.7982C12.098 18.4932 12.5 17.8852 12.5 17.2132V14.6222L17.241 18.5402C17.609 18.8432 18.073 19.0012 18.544 19.0012C18.851 19.0012 19.161 18.9342 19.45 18.7982C20.098 18.4932 20.5 17.8852 20.5 17.2132V8.78721C20.5 8.11421 20.098 7.50621 19.45 7.20121Z"
      fill={fill}
    />
  </svg>
);

IconBackward.defaultProps = {
  ...iconDefaultProps,
};

export default IconBackward;
