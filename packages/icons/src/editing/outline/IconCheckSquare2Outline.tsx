import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCheckSquare2: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.7046 8.3945L10.9206 13.3635L9.2876 11.2775C8.9466 10.8415 8.3186 10.7655 7.8836 11.1065C7.4486 11.4465 7.3716 12.0755 7.7126 12.5095L10.1436 15.6165C10.3336 15.8585 10.6236 15.9995 10.9316 15.9995H10.9386C11.2476 15.9985 11.5396 15.8525 11.7266 15.6055L16.2956 9.6055C16.6306 9.1655 16.5456 8.5395 16.1056 8.2045C15.6656 7.8695 15.0376 7.9555 14.7046 8.3945ZM19 18C19 18.552 18.551 19 18 19H6C5.449 19 5 18.552 5 18V6C5 5.448 5.449 5 6 5H18C18.551 5 19 5.448 19 6V18ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
      fill={fill}
    />
  </svg>
);

IconCheckSquare2.defaultProps = {
  ...iconDefaultProps,
};

export default IconCheckSquare2;
