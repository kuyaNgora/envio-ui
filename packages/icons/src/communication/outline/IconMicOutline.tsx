import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconMic: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 17.9199V19.9999H15.105C15.598 19.9999 16 20.4019 16 20.8949V21.1059C16 21.5979 15.598 21.9999 15.105 21.9999H8.895C8.402 21.9999 8 21.5979 8 21.1059V20.8949C8 20.4019 8.402 19.9999 8.895 19.9999H11V17.9199C7.613 17.4319 5 14.5199 5 10.9999C5 10.4479 5.447 9.99988 6 9.99988C6.553 9.99988 7 10.4479 7 10.9999C7 13.7569 9.243 15.9999 12 15.9999C14.757 15.9999 17 13.7569 17 10.9999C17 10.4479 17.447 9.99988 18 9.99988C18.553 9.99988 19 10.4479 19 10.9999C19 14.5199 16.387 17.4319 13 17.9199ZM10 5.99988C10 4.89688 10.897 3.99988 12 3.99988C13.103 3.99988 14 4.89688 14 5.99988V10.9999C14 12.1029 13.103 12.9999 12 12.9999C10.897 12.9999 10 12.1029 10 10.9999V5.99988ZM12 14.9999C14.206 14.9999 16 13.2059 16 10.9999V5.99988C16 3.79488 14.206 1.99988 12 1.99988C9.794 1.99988 8 3.79488 8 5.99988V10.9999C8 13.2059 9.794 14.9999 12 14.9999Z"
      fill={fill}
    />
  </svg>
);

IconMic.defaultProps = {
  ...iconDefaultProps,
};

export default IconMic;
