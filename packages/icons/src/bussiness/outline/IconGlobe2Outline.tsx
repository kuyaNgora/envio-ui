import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconGlobe2: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.889 18.318C16.717 17.885 16.473 17.507 16.259 17.184C16.151 17.022 16.04 16.857 15.943 16.687C15.554 16.011 15.688 15.737 16.319 14.68L16.421 14.507C16.932 13.646 16.96 12.82 16.986 12.092C16.998 11.734 17.01 11.397 17.079 11.08C17.24 10.348 18.787 10.153 19.746 10.038C19.907 10.667 20 11.322 20 12C20 14.569 18.778 16.853 16.889 18.318ZM4.962 15.799C5.598 15.961 6.287 16.073 6.988 16.073C8.068 16.073 9.171 15.809 10.125 15.062C11.841 13.72 11.841 12.004 11.841 10.624C11.841 9.732 11.841 8.963 12.213 8.28C12.413 7.914 12.839 7.66 13.332 7.365C13.634 7.184 13.947 6.998 14.247 6.762C14.89 6.259 15.368 5.612 15.664 4.896C17.064 5.621 18.224 6.744 18.99 8.119C17.562 8.317 15.535 8.785 15.126 10.652C15.018 11.146 15.001 11.611 14.988 12.022C14.967 12.605 14.951 13.066 14.701 13.488L14.601 13.656C13.954 14.739 13.222 15.967 14.209 17.684C14.328 17.892 14.461 18.092 14.592 18.291C14.936 18.807 15.105 19.092 15.106 19.372C14.151 19.776 13.101 20 12 20C8.963 20 6.317 18.298 4.962 15.799ZM12 4C12.616 4 13.211 4.076 13.787 4.208C13.618 4.58 13.357 4.919 13.013 5.188C12.795 5.36 12.55 5.503 12.307 5.648C11.656 6.036 10.919 6.476 10.457 7.322C9.841 8.452 9.841 9.606 9.841 10.624C9.841 11.979 9.797 12.78 8.893 13.487C7.524 14.56 5.429 13.961 4.133 13.416C4.051 12.955 4 12.483 4 12C4 7.589 7.589 4 12 4ZM12 2C6.486 2 2 6.486 2 12C2 17.513 6.486 22 12 22C17.514 22 22 17.513 22 12C22 6.486 17.514 2 12 2Z"
      fill={fill}
    />
  </svg>
);

IconGlobe2.defaultProps = {
  ...iconDefaultProps,
};

export default IconGlobe2;
