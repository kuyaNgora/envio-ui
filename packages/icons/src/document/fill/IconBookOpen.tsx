import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconBookOpen: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 25" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.439 4.95036C20.82 4.85236 21.211 4.93736 21.518 5.17536C21.825 5.41436 22 5.77436 22 6.16136V17.8474C22 18.4184 21.615 18.9164 21.062 19.0584L13.5 20.9994V6.73336L20.439 4.95036ZM4.55837 4.95006L11.5004 6.73306V21.0001L3.93837 19.0581C3.38637 18.9171 3.00037 18.4191 3.00037 17.8471V6.16206C3.00037 5.77406 3.17637 5.41506 3.48237 5.17506C3.78837 4.93806 4.18137 4.85506 4.55837 4.95006Z"
      fill={fill}
    />
  </svg>
);

IconBookOpen.defaultProps = {
  ...iconDefaultProps,
};

export default IconBookOpen;
