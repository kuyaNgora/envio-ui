import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconForwardStep: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.75 16.9083V9.01427L13.572 12.9983L8.75 16.9083ZM16.25 7.00027C15.698 7.00027 15.25 7.44727 15.25 8.00027V11.8183C15.203 11.7693 15.162 11.7183 15.108 11.6743L10.009 7.46027C9.4 6.95827 8.532 6.85627 7.8 7.20127C7.152 7.50727 6.75 8.11427 6.75 8.78727V17.2133C6.75 17.8863 7.152 18.4933 7.8 18.7993C8.089 18.9343 8.399 19.0013 8.706 19.0013C9.177 19.0013 9.641 18.8443 10.009 18.5393L15.109 14.3263C15.162 14.2823 15.203 14.2303 15.25 14.1813V18.0003C15.25 18.5533 15.698 19.0003 16.25 19.0003C16.802 19.0003 17.25 18.5533 17.25 18.0003V8.00027C17.25 7.44727 16.802 7.00027 16.25 7.00027Z"
      fill={fill}
    />
  </svg>
);

IconForwardStep.defaultProps = {
  ...iconDefaultProps,
};

export default IconForwardStep;
