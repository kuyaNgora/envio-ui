import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPersonCheck: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.99963 11C12.2056 11 13.9996 9.206 13.9996 7C13.9996 4.794 12.2056 3 9.99963 3C7.79363 3 5.99963 4.794 5.99963 7C5.99963 9.206 7.79363 11 9.99963 11ZM21.6559 4.2456C21.2389 3.8836 20.6079 3.9266 20.2449 4.3436L18.3789 6.4886L17.7449 5.7796C17.3779 5.3676 16.7459 5.3326 16.3329 5.7016C15.9219 6.0696 15.8859 6.7026 16.2549 7.1136L17.6439 8.6666C17.8339 8.8786 18.1049 8.9996 18.3889 8.9996H18.3959C18.6829 8.9976 18.9559 8.8726 19.1439 8.6566L21.7549 5.6566C22.1169 5.2396 22.0729 4.6076 21.6559 4.2456ZM16.9996 20C16.9996 20.552 16.5526 21 15.9996 21H3.99963C3.44663 21 2.99963 20.552 2.99963 20C2.99963 16.14 6.14063 13 9.99963 13C13.8586 13 16.9996 16.14 16.9996 20Z"
      fill={fill}
    />
  </svg>
);

IconPersonCheck.defaultProps = {
  ...iconDefaultProps,
};

export default IconPersonCheck;
