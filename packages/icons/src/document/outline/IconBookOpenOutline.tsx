import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconBookOpen: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 25" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 16.4025L13 17.7505V7.59747L19 6.25047V16.4025ZM5 6.25047L11 7.59747V17.7505L5 16.4025V6.25047ZM20.625 4.21847C20.387 4.02947 20.077 3.95747 19.78 4.02447L12 5.77247L4.22 4.02447C3.922 3.95647 3.613 4.02947 3.375 4.21847C3.138 4.40947 3 4.69647 3 5.00047V17.2025C3 17.6705 3.324 18.0755 3.78 18.1775L11.78 19.9755C11.854 19.9925 11.927 20.0005 12 20.0005C12.073 20.0005 12.146 19.9925 12.22 19.9755L20.22 18.1775C20.676 18.0755 21 17.6705 21 17.2025V5.00047C21 4.69647 20.862 4.40947 20.625 4.21847Z"
      fill={fill}
    />
  </svg>
);

IconBookOpen.defaultProps = {
  ...iconDefaultProps,
};

export default IconBookOpen;
