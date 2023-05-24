import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconThermometerPlus: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 4C14.948 4 14.5 4.449 14.5 5V13.54C14.5 13.898 14.309 14.229 13.998 14.407C13.074 14.938 12.5 15.932 12.5 17C12.5 18.654 13.846 20 15.5 20C17.154 20 18.5 18.654 18.5 17C18.5 15.932 17.926 14.938 17.002 14.407C16.691 14.229 16.5 13.898 16.5 13.54V5C16.5 4.733 16.397 4.487 16.213 4.306C16.014 4.102 15.767 4 15.5 4ZM15.5 22C12.743 22 10.5 19.757 10.5 17C10.5 15.42 11.254 13.938 12.5 13.003V5C12.5 3.346 13.846 2 15.5 2C16.312 2 17.066 2.317 17.627 2.892C18.184 3.434 18.5 4.189 18.5 5V13.003C19.746 13.938 20.5 15.42 20.5 17C20.5 19.757 18.257 22 15.5 22ZM5.5 7H4.5C3.95 7 3.5 6.55 3.5 6C3.5 5.45 3.95 5 4.5 5H5.5V4C5.5 3.45 5.95 3 6.5 3C7.05 3 7.5 3.45 7.5 4V5H8.5C9.05 5 9.5 5.45 9.5 6C9.5 6.55 9.05 7 8.5 7H7.5V8C7.5 8.55 7.05 9 6.5 9C5.95 9 5.5 8.55 5.5 8V7Z"
      fill={fill}
    />
  </svg>
);

IconThermometerPlus.defaultProps = {
  ...iconDefaultProps,
};

export default IconThermometerPlus;
