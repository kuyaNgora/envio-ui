import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconThermometerMin: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 5C14.5 4.449 14.948 4 15.5 4C15.767 4 16.014 4.102 16.213 4.306C16.397 4.487 16.5 4.733 16.5 5V13.54C16.5 13.898 16.691 14.229 17.002 14.407C17.926 14.938 18.5 15.932 18.5 17C18.5 18.654 17.154 20 15.5 20C13.846 20 12.5 18.654 12.5 17C12.5 15.932 13.074 14.938 13.998 14.407C14.309 14.229 14.5 13.898 14.5 13.54V5ZM10.5 17C10.5 19.757 12.743 22 15.5 22C18.257 22 20.5 19.757 20.5 17C20.5 15.42 19.746 13.938 18.5 13.003V5C18.5 4.189 18.184 3.434 17.627 2.892C17.066 2.317 16.312 2 15.5 2C13.846 2 12.5 3.346 12.5 5V13.003C11.254 13.938 10.5 15.42 10.5 17ZM4.5 7H8.5C9.05 7 9.5 6.55 9.5 6C9.5 5.45 9.05 5 8.5 5H4.5C3.95 5 3.5 5.45 3.5 6C3.5 6.55 3.95 7 4.5 7Z"
      fill={fill}
    />
  </svg>
);

IconThermometerMin.defaultProps = {
  ...iconDefaultProps,
};

export default IconThermometerMin;
