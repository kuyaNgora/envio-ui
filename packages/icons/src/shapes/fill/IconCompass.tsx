import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCompass: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7966 13.213L12.4886 12.529L13.2026 10.787L11.5106 11.471L10.7966 13.213ZM15.925 9.42L14.179 13.678C14.077 13.928 13.879 14.125 13.629 14.227L9.416 15.928C9.293 15.977 9.166 16 9.042 16C8.771 16 8.517 15.883 8.329 15.69C8.311 15.673 8.292 15.659 8.275 15.642C8.266 15.631 8.26 15.618 8.252 15.607C8.014 15.331 7.926 14.941 8.074 14.58L9.82 10.322C9.922 10.072 10.121 9.875 10.371 9.774L14.584 8.072C14.978 7.916 15.409 8.028 15.683 8.318C15.974 8.594 16.086 9.026 15.925 9.42ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconCompass.defaultProps = {
  ...iconDefaultProps,
};

export default IconCompass;
