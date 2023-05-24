import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconChevronRight: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.4994 19C9.2734 19 9.0464 18.924 8.8594 18.768C8.4354 18.415 8.3784 17.784 8.7314 17.36L13.2074 11.989L8.8924 6.62695C8.5464 6.19695 8.6144 5.56695 9.0444 5.22095C9.4754 4.87495 10.1044 4.94295 10.4514 5.37295L15.2794 11.373C15.5774 11.744 15.5734 12.274 15.2684 12.64L10.2684 18.64C10.0704 18.877 9.7864 19 9.4994 19Z"
      fill={fill}
    />
  </svg>
);

IconChevronRight.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronRight;
