import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconMovie: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 18.256C19 18.666 18.666 19 18.256 19H17V17H19V18.256ZM5 18.256V17H7V19H5.744C5.334 19 5 18.666 5 18.256ZM5.744 5H7V7H5V5.744C5 5.334 5.334 5 5.744 5ZM19 5.744V7H17V5H18.256C18.666 5 19 5.334 19 5.744ZM17 15H19V13H17V15ZM17 11H19V9H17V11ZM5 15H7V13H5V15ZM5 11H7V9H5V11ZM18.256 3H5.744C4.231 3 3 4.232 3 5.744V18.256C3 19.769 4.231 21 5.744 21H18.256C19.769 21 21 19.769 21 18.256V5.744C21 4.232 19.769 3 18.256 3Z"
      fill={fill}
    />
  </svg>
);

IconMovie.defaultProps = {
  ...iconDefaultProps,
};

export default IconMovie;
