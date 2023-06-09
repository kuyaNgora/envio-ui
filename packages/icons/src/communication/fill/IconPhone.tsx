import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPhone: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.3999 22C8.90788 22 1.99988 15.092 1.99988 6.6C1.99988 4.063 4.06388 2 6.59988 2C6.85988 2 7.11688 2.022 7.36588 2.065C7.60888 2.104 7.85388 2.166 8.09088 2.248C8.41688 2.361 8.66088 2.634 8.73788 2.97L10.1079 8.934C10.1829 9.262 10.0879 9.606 9.85488 9.85C9.71788 9.992 9.71488 9.995 8.47488 10.644C9.47888 12.818 11.2239 14.557 13.3549 15.527C14.0039 14.286 14.0079 14.282 14.1499 14.146C14.3949 13.912 14.7399 13.821 15.0669 13.893L21.0309 15.262C21.3659 15.339 21.6389 15.583 21.7519 15.908C21.8339 16.144 21.8949 16.388 21.9359 16.639C21.9779 16.886 21.9999 17.142 21.9999 17.4C21.9999 19.937 19.9369 22 17.3999 22Z"
      fill={fill}
    />
  </svg>
);

IconPhone.defaultProps = {
  ...iconDefaultProps,
};

export default IconPhone;
