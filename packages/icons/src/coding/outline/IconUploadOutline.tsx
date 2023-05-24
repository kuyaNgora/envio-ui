import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconUpload: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3.5H19C19.55 3.5 20 3.95 20 4.5V6.5C20 7.05 19.55 7.5 19 7.5C18.45 7.5 18 7.05 18 6.5V5.5H6V6.5C6 7.05 5.55 7.5 5 7.5C4.45 7.5 4 7.05 4 6.5V4.5C4 3.95 4.45 3.5 5 3.5ZM8.001 13.5C7.696 13.5 7.397 13.362 7.2 13.1C6.868 12.658 6.958 12.031 7.4 11.7L11.4 8.7C11.746 8.44 12.222 8.433 12.575 8.682L16.575 11.496C17.027 11.814 17.136 12.438 16.818 12.889C16.5 13.34 15.877 13.45 15.425 13.132L12.9972 11.4241C12.999 11.4492 13 11.4745 13 11.5V19.5C13 20.052 12.553 20.5 12 20.5C11.447 20.5 11 20.052 11 19.5V11.5002L8.6 13.3C8.42 13.435 8.21 13.5 8.001 13.5Z"
      fill={fill}
    />
  </svg>
);

IconUpload.defaultProps = {
  ...iconDefaultProps,
};

export default IconUpload;
