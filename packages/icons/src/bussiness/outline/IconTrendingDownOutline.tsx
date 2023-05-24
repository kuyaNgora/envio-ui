import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconTrendingDown: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 26 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 12C21 11.448 20.553 11 20 11C19.447 11 19 11.448 19 12V14.297L14.759 9.349C14.443 8.979 13.905 8.891 13.485 9.143L9.21999 11.702L4.76899 6.36C4.41499 5.937 3.78599 5.877 3.35899 6.232C2.93599 6.585 2.87799 7.216 3.23099 7.64L8.23099 13.64C8.54799 14.019 9.09299 14.112 9.51499 13.857L13.79 11.292L17.826 16H15C14.447 16 14 16.448 14 17C14 17.552 14.447 18 15 18H20C20.124 18 20.247 17.973 20.364 17.926C20.413 17.907 20.451 17.875 20.496 17.85C20.548 17.819 20.604 17.8 20.65 17.759C20.66 17.751 20.664 17.739 20.673 17.73C20.728 17.68 20.766 17.619 20.808 17.558C20.841 17.51 20.88 17.468 20.903 17.416C20.928 17.363 20.936 17.304 20.95 17.247C20.969 17.177 20.99 17.109 20.992 17.037C20.993 17.024 21 17.013 21 17V12Z"
      fill={fill}
    />
  </svg>
);

IconTrendingDown.defaultProps = {
  ...iconDefaultProps,
};

export default IconTrendingDown;
