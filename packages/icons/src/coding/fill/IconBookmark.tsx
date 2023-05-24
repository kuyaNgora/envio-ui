import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconBookmark: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 20.9996C5.83 20.9996 5.66 20.9566 5.507 20.8696C5.194 20.6926 5 20.3596 5 19.9996V5.33263C5 4.04663 5.987 2.99963 7.2 2.99963H16.8C18.013 2.99963 19 4.04663 19 5.33263V19.9996C19 20.3546 18.811 20.6846 18.504 20.8636C18.197 21.0436 17.818 21.0456 17.508 20.8706L11.836 17.6626L6.515 20.8566C6.356 20.9516 6.178 20.9996 6 20.9996Z"
      fill={fill}
    />
  </svg>
);

IconBookmark.defaultProps = {
  ...iconDefaultProps,
};

export default IconBookmark;
