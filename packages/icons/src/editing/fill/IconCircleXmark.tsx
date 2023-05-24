import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCircleXmark: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.707 13.2929C15.098 13.6839 15.098 14.3159 14.707 14.7069C14.512 14.9019 14.256 14.9999 14 14.9999C13.744 14.9999 13.488 14.9019 13.293 14.7069L12 13.4139L10.707 14.7069C10.512 14.9019 10.256 14.9999 10 14.9999C9.744 14.9999 9.488 14.9019 9.293 14.7069C8.902 14.3159 8.902 13.6839 9.293 13.2929L10.586 11.9999L9.293 10.7069C8.902 10.3159 8.902 9.68388 9.293 9.29288C9.684 8.90188 10.316 8.90188 10.707 9.29288L12 10.5859L13.293 9.29288C13.684 8.90188 14.316 8.90188 14.707 9.29288C15.098 9.68388 15.098 10.3159 14.707 10.7069L13.414 11.9999L14.707 13.2929ZM12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988Z"
      fill={fill}
    />
  </svg>
);

IconCircleXmark.defaultProps = {
  ...iconDefaultProps,
};

export default IconCircleXmark;
