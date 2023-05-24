import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconVideo: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 14.6L17.191 12L20 9.401V14.6ZM15 16C15 16.552 14.552 17 14 17H5C4.448 17 4 16.552 4 16V8C4 7.449 4.448 7 5 7H14C14.552 7 15 7.449 15 8V16ZM21.012 7.146C20.386 6.873 19.66 6.992 19.161 7.452L17 9.452V8C17 6.346 15.654 5 14 5H5C3.346 5 2 6.346 2 8V16C2 17.655 3.346 19 5 19H14C15.654 19 17 17.655 17 16V14.549L19.161 16.548C19.481 16.845 19.896 17 20.319 17C20.553 17 20.788 16.953 21.012 16.855C21.621 16.589 22 16.02 22 15.371V8.63C22 7.981 21.621 7.412 21.012 7.146Z"
      fill={fill}
    />
  </svg>
);

IconVideo.defaultProps = {
  ...iconDefaultProps,
};

export default IconVideo;
