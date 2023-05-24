import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCube: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10.5033L20.512 6.92525C20.366 6.77625 20.201 6.64325 20.001 6.55025L12.801 3.17625C12.296 2.94125 11.704 2.94125 11.199 3.17625L3.99905 6.55025C3.79905 6.64325 3.63405 6.77625 3.48805 6.92525L12 10.5033ZM11.25 11.8274L3.00005 8.35945V16.0884C2.99505 16.7295 3.37905 17.3174 3.99005 17.6064L11.19 20.9795C11.1998 20.9841 11.21 20.9871 11.2204 20.9902C11.2303 20.9931 11.2403 20.9961 11.25 21.0005V11.8274ZM12.75 20.9974V11.8274L21 8.35945V16.0975C21 16.7365 20.613 17.3214 20.001 17.6064L12.801 20.9795C12.792 20.984 12.7823 20.9869 12.7725 20.9899C12.765 20.9921 12.7574 20.9944 12.75 20.9974Z"
      fill={fill}
    />
  </svg>
);

IconCube.defaultProps = {
  ...iconDefaultProps,
};

export default IconCube;
