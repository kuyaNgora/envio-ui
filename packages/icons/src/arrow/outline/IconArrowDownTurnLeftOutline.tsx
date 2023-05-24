import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowDownTurnLeft: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.979 6.95901C19.977 6.40801 19.529 5.96301 18.979 5.96301H18.975C18.423 5.96501 17.977 6.41501 17.979 6.96701L18 11.967C18 12.234 17.898 12.486 17.71 12.675C17.521 12.865 17.271 12.97 17.004 12.971L8.08499 13.008L10.771 9.62201C11.114 9.18901 11.041 8.56001 10.609 8.21701C10.177 7.87401 9.54799 7.94801 9.20399 8.37901L5.22499 13.395C4.93399 13.762 4.93699 14.28 5.22999 14.645L9.24999 19.628C9.44799 19.873 9.73699 20 10.029 20C10.25 20 10.472 19.927 10.657 19.778C11.086 19.432 11.154 18.802 10.807 18.372L8.09299 15.008L17.012 14.971C17.813 14.968 18.565 14.653 19.13 14.084C19.694 13.515 20.003 12.76 20 11.959L19.979 6.95901Z"
      fill={fill}
    />
  </svg>
);

IconArrowDownTurnLeft.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowDownTurnLeft;
