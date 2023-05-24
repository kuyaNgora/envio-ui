import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconHeadphone: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 19.5C16.897 19.5 16 18.603 16 17.5C16 16.397 16.897 15.5 18 15.5C19.103 15.5 20 16.397 20 17.5C20 18.603 19.103 19.5 18 19.5ZM6 15.5C7.103 15.5 8 16.397 8 17.5C8 18.603 7.103 19.5 6 19.5C4.897 19.5 4 18.603 4 17.5C4 16.397 4.897 15.5 6 15.5ZM12 2.5C6.486 2.5 2 7.15 2 12.866V17.5C2 19.706 3.794 21.5 6 21.5C8.206 21.5 10 19.706 10 17.5C10 15.294 8.206 13.5 6 13.5C5.268 13.5 4.591 13.712 4 14.057V12.866C4 8.253 7.589 4.5 12 4.5C16.411 4.5 20 8.253 20 12.866V14.057C19.409 13.712 18.732 13.5 18 13.5C15.794 13.5 14 15.294 14 17.5C14 19.706 15.794 21.5 18 21.5C20.206 21.5 22 19.706 22 17.5V12.866C22 7.15 17.514 2.5 12 2.5Z"
      fill={fill}
    />
  </svg>
);

IconHeadphone.defaultProps = {
  ...iconDefaultProps,
};

export default IconHeadphone;
