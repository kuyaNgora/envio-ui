import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowDown: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7682 13.36C18.4142 12.936 17.7842 12.878 17.3602 13.232L13.0002 16.865V5C13.0002 4.448 12.5522 4 12.0002 4C11.4482 4 11.0002 4.448 11.0002 5V16.865L6.64023 13.232C6.21523 12.878 5.58523 12.936 5.23223 13.36C4.87823 13.784 4.93523 14.415 5.36023 14.768L11.3602 19.768C11.4072 19.808 11.4632 19.827 11.5152 19.857C11.5562 19.881 11.5922 19.909 11.6372 19.927C11.7542 19.973 11.8762 20 12.0002 20C12.1242 20 12.2462 19.973 12.3632 19.927C12.4082 19.909 12.4442 19.881 12.4852 19.857C12.5372 19.827 12.5932 19.808 12.6402 19.768L18.6402 14.768C19.0642 14.415 19.1222 13.784 18.7682 13.36Z"
      fill={fill}
    />
  </svg>
);

IconArrowDown.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowDown;
