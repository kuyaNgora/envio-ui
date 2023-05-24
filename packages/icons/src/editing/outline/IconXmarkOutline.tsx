import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconXmark: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.414 12L17.707 7.70701C18.098 7.31601 18.098 6.68401 17.707 6.29301C17.316 5.90201 16.684 5.90201 16.293 6.29301L12 10.586L7.70701 6.29301C7.31601 5.90201 6.68401 5.90201 6.29301 6.29301C5.90201 6.68401 5.90201 7.31601 6.29301 7.70701L10.586 12L6.29301 16.293C5.90201 16.684 5.90201 17.316 6.29301 17.707C6.48801 17.902 6.74401 18 7.00001 18C7.25601 18 7.51201 17.902 7.70701 17.707L12 13.414L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293L13.414 12Z"
      fill={fill}
    />
  </svg>
);

IconXmark.defaultProps = {
  ...iconDefaultProps,
};

export default IconXmark;
