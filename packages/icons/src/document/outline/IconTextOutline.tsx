import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconText: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 3.5H4C3.447 3.5 3 3.947 3 4.5V7.5C3 8.053 3.447 8.5 4 8.5C4.553 8.5 5 8.053 5 7.5V5.5H11V18.5H9C8.447 18.5 8 18.947 8 19.5C8 20.053 8.447 20.5 9 20.5H15C15.553 20.5 16 20.053 16 19.5C16 18.947 15.553 18.5 15 18.5H13V5.5H19V7.5C19 8.053 19.447 8.5 20 8.5C20.553 8.5 21 8.053 21 7.5V4.5C21 3.947 20.553 3.5 20 3.5Z"
      fill={fill}
    />
  </svg>
);

IconText.defaultProps = {
  ...iconDefaultProps,
};

export default IconText;
