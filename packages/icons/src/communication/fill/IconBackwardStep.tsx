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
      d="M16.95 7.20121C16.216 6.85621 15.348 6.95821 14.741 7.46121L9.641 11.6742C9.588 11.7182 9.547 11.7692 9.5 11.8182V8.00021C9.5 7.44721 9.052 7.00021 8.5 7.00021C7.948 7.00021 7.5 7.44721 7.5 8.00021V18.0002C7.5 18.5532 7.948 19.0002 8.5 19.0002C9.052 19.0002 9.5 18.5532 9.5 18.0002V14.1812C9.547 14.2302 9.588 14.2822 9.641 14.3262L14.741 18.5402C15.109 18.8442 15.573 19.0012 16.044 19.0012C16.351 19.0012 16.661 18.9342 16.95 18.7992C17.597 18.4932 18 17.8862 18 17.2132V8.78721C18 8.11421 17.597 7.50721 16.95 7.20121Z"
      fill={fill}
    />
  </svg>
);

IconBackwardStep.defaultProps = {
  ...iconDefaultProps,
};

export default IconBackwardStep;
