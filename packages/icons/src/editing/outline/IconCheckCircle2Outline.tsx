import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCheckCircle2: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.7046 8.3945L10.9206 13.3635L9.2876 11.2775C8.9476 10.8415 8.3176 10.7655 7.8836 11.1065C7.4486 11.4465 7.3716 12.0755 7.7126 12.5095L10.1436 15.6165C10.3336 15.8585 10.6236 15.9995 10.9316 15.9995H10.9386C11.2476 15.9985 11.5396 15.8525 11.7266 15.6055L16.2956 9.6055C16.6306 9.1655 16.5456 8.5395 16.1056 8.2045C15.6646 7.8695 15.0386 7.9555 14.7046 8.3945ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.477 2 2 6.478 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.478 17.523 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconCheckCircle2.defaultProps = {
  ...iconDefaultProps,
};

export default IconCheckCircle2;
