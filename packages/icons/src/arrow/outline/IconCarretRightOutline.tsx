import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCarretRight: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5 8.01514V15.9091L14.321 11.9981L9.5 8.01514ZM9.456 18.0011C9.149 18.0011 8.839 17.9351 8.55 17.7991C7.902 17.4941 7.5 16.8861 7.5 16.2131V7.78714C7.5 7.11514 7.902 6.50714 8.55 6.20214C9.282 5.85714 10.15 5.95714 10.759 6.46014L15.858 10.6741C16.267 11.0101 16.5 11.4941 16.5 12.0001C16.5 12.5061 16.267 12.9911 15.858 13.3271L10.759 17.5391C10.391 17.8441 9.927 18.0011 9.456 18.0011Z"
      fill={fill}
    />
  </svg>
);

IconCarretRight.defaultProps = {
  ...iconDefaultProps,
};

export default IconCarretRight;
