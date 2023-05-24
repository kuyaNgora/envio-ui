import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconVideo: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.012 7.146C20.386 6.874 19.66 6.992 19.161 7.452L17 9.452V8C17 6.346 15.655 5 14 5H5C3.346 5 2 6.346 2 8V16C2 17.655 3.346 19 5 19H14C15.655 19 17 17.655 17 16V14.549L19.161 16.548C19.482 16.845 19.897 17 20.32 17C20.553 17 20.788 16.953 21.012 16.855C21.621 16.589 22 16.02 22 15.371V8.63C22 7.981 21.621 7.412 21.012 7.146Z"
      fill={fill}
    />
  </svg>
);

IconVideo.defaultProps = {
  ...iconDefaultProps,
};

export default IconVideo;
