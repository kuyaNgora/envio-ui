import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCheck: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z"
      fill={fill}
    />
  </svg>
);

IconCheck.defaultProps = {
  ...iconDefaultProps,
};

export default IconCheck;
