import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconShareNode: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 15C18.183 15 17.443 15.33 16.901 15.861L8.966 12.335C8.979 12.224 9 12.114 9 12C9 11.886 8.979 11.776 8.966 11.665L16.901 8.139C17.443 8.67 18.183 9 19 9C20.654 9 22 7.654 22 6C22 4.346 20.654 3 19 3C17.346 3 16 4.346 16 6C16 6.114 16.021 6.224 16.034 6.335L8.099 9.861C7.557 9.33 6.817 9 6 9C4.346 9 3 10.346 3 12C3 13.654 4.346 15 6 15C6.817 15 7.557 14.67 8.099 14.139L16.034 17.665C16.021 17.776 16 17.886 16 18C16 19.654 17.346 21 19 21C20.654 21 22 19.654 22 18C22 16.346 20.654 15 19 15Z"
      fill={fill}
    />
  </svg>
);

IconShareNode.defaultProps = {
  ...iconDefaultProps,
};

export default IconShareNode;
