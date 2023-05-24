import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconHeadphone: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3C6.486 3 2 7.65 2 13.366V18C2 20.206 3.794 22 6 22C8.206 22 10 20.206 10 18C10 15.794 8.206 14 6 14C5.268 14 4.591 14.212 4 14.557V13.366C4 8.753 7.589 5 12 5C16.411 5 20 8.753 20 13.366V14.557C19.409 14.212 18.732 14 18 14C15.794 14 14 15.794 14 18C14 20.206 15.794 22 18 22C20.206 22 22 20.206 22 18V13.366C22 7.65 17.514 3 12 3Z"
      fill={fill}
    />
  </svg>
);

IconHeadphone.defaultProps = {
  ...iconDefaultProps,
};

export default IconHeadphone;
