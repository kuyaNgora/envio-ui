import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconBackwardStep: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.25 16.9852L10.428 13.0022L15.25 9.09121V16.9852ZM16.2 7.20121C15.466 6.85621 14.599 6.95821 13.991 7.46121L8.891 11.6732C8.838 11.7172 8.797 11.7692 8.75 11.8182V8.00021C8.75 7.44721 8.302 7.00021 7.75 7.00021C7.198 7.00021 6.75 7.44721 6.75 8.00021V18.0002C6.75 18.5522 7.198 19.0002 7.75 19.0002C8.302 19.0002 8.75 18.5522 8.75 18.0002V14.1812C8.797 14.2302 8.838 14.2822 8.892 14.3262L13.991 18.5402C14.359 18.8432 14.823 19.0012 15.294 19.0012C15.601 19.0012 15.911 18.9342 16.2 18.7982C16.848 18.4932 17.25 17.8852 17.25 17.2132V8.78721C17.25 8.11421 16.848 7.50621 16.2 7.20121Z"
      fill={fill}
    />
  </svg>
);

IconBackwardStep.defaultProps = {
  ...iconDefaultProps,
};

export default IconBackwardStep;
