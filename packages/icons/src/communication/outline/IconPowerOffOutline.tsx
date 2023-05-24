import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPowerOff: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.0001 12.4998C13.0001 13.0528 12.5521 13.4998 12.0001 13.4998C11.4481 13.4998 11.0001 13.0528 11.0001 12.4998V2.49976C11.0001 1.94676 11.4481 1.49976 12.0001 1.49976C12.5521 1.49976 13.0001 1.94676 13.0001 2.49976V12.4998ZM15.239 4.04106C15.492 3.55006 16.096 3.35906 16.586 3.61106C19.925 5.33806 22 8.74306 22 12.5001C22 18.0131 17.514 22.5001 12 22.5001C6.486 22.5001 2 18.0131 2 12.5001C2 8.74306 4.075 5.33806 7.415 3.61106C7.904 3.35806 8.508 3.54906 8.762 4.04106C9.016 4.53106 8.823 5.13406 8.333 5.38806C5.66 6.76906 4 9.49406 4 12.5001C4 16.9111 7.589 20.5001 12 20.5001C16.411 20.5001 20 16.9111 20 12.5001C20 9.49406 18.34 6.76906 15.668 5.38806C15.177 5.13406 14.985 4.53106 15.239 4.04106Z"
      fill={fill}
    />
  </svg>
);

IconPowerOff.defaultProps = {
  ...iconDefaultProps,
};

export default IconPowerOff;
