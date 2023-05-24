import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconFlag: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.268 4.68C18.806 4.346 18.208 4.251 17.669 4.427C17.093 4.615 16.343 4.714 15.5 4.714C14.376 4.714 13.4 4.331 12.366 3.926C11.204 3.471 10.001 3 8.5 3C5.614 3 4.496 3.952 4.3 4.144C4.109 4.331 4 4.589 4 4.858V12V15.143V20C4 20.553 4.448 21 5 21C5.553 21 6 20.553 6 20V15.702C6.395 15.527 7.173 15.286 8.5 15.286C9.624 15.286 10.601 15.669 11.635 16.075C12.797 16.53 13.999 17 15.5 17C17.309 17 18.423 16.622 19.041 16.305C19.633 15.998 20 15.403 20 14.749V6.106C20 5.546 19.727 5.013 19.268 4.68Z"
      fill={fill}
    />
  </svg>
);

IconFlag.defaultProps = {
  ...iconDefaultProps,
};

export default IconFlag;
