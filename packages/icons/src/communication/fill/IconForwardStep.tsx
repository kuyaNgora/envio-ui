import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconForwardStep: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 7.00027C16.448 7.00027 16 7.44727 16 8.00027V11.8183C15.953 11.7703 15.912 11.7183 15.858 11.6743L10.759 7.46027C10.15 6.95827 9.282 6.85627 8.55 7.20127C7.902 7.50727 7.5 8.11427 7.5 8.78727V17.2133C7.5 17.8863 7.902 18.4933 8.55 18.7993C8.839 18.9353 9.149 19.0013 9.456 19.0013C9.927 19.0013 10.391 18.8443 10.759 18.5393L15.859 14.3263C15.912 14.2823 15.953 14.2303 16 14.1823V18.0003C16 18.5533 16.448 19.0003 17 19.0003C17.552 19.0003 18 18.5533 18 18.0003V8.00027C18 7.44727 17.552 7.00027 17 7.00027Z"
      fill={fill}
    />
  </svg>
);

IconForwardStep.defaultProps = {
  ...iconDefaultProps,
};

export default IconForwardStep;
