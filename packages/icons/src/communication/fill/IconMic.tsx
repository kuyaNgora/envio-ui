import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconMic: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 11C16 13.206 14.206 15 12 15C9.794 15 8 13.206 8 11V6C8 3.794 9.794 2 12 2C14.206 2 16 3.794 16 6V11ZM18 10C18.553 10 19 10.448 19 11C19 14.52 16.387 17.432 13 17.92V20H15.105C15.598 20 16 20.402 16 20.895V21.105C16 21.598 15.598 22 15.105 22H8.895C8.402 22 8 21.598 8 21.105V20.895C8 20.402 8.402 20 8.895 20H11V17.92C7.613 17.432 5 14.52 5 11C5 10.448 5.447 10 6 10C6.553 10 7 10.448 7 11C7 13.757 9.243 16 12 16C14.757 16 17 13.757 17 11C17 10.448 17.447 10 18 10Z"
      fill={fill}
    />
  </svg>
);

IconMic.defaultProps = {
  ...iconDefaultProps,
};

export default IconMic;
