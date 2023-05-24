import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconReply: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.721 21C20.26 21 19.859 20.685 19.749 20.237C18.86 16.588 15.729 13.952 11.954 13.553V14.674C11.954 15.38 11.535 16.009 10.862 16.314C10.13 16.647 9.278 16.527 8.685 16.01L3.618 11.586C3.226 11.242 3 10.755 3 10.25C3 9.74498 3.226 9.25798 3.618 8.91398L8.685 4.48998C9.278 3.97298 10.13 3.85298 10.862 4.18598C11.535 4.49098 11.954 5.11998 11.954 5.82598V7.04398C17.578 7.53698 22 12.15 22 17.75C22 18.56 21.897 19.396 21.693 20.236C21.584 20.685 21.183 21 20.721 21Z"
      fill={fill}
    />
  </svg>
);

IconReply.defaultProps = {
  ...iconDefaultProps,
};

export default IconReply;
