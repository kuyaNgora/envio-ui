import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconBolt: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.1112 23.0001C10.9972 23.0001 10.8822 22.9801 10.7692 22.9391C10.3372 22.7821 10.0672 22.3501 10.1172 21.8931L10.8852 14.8001H5.00021C4.63121 14.8001 4.29221 14.5971 4.11821 14.2711C3.94421 13.9451 3.96421 13.5511 4.16921 13.2441L12.0572 1.44406C12.3132 1.06106 12.7972 0.90206 13.2302 1.06106C13.6632 1.21806 13.9322 1.65006 13.8822 2.10706L13.1142 9.20006H19.0002C19.3692 9.20006 19.7082 9.40306 19.8822 9.72906C20.0552 10.0551 20.0362 10.4491 19.8312 10.7561L11.9422 22.5561C11.7532 22.8401 11.4372 23.0001 11.1112 23.0001Z"
      fill={fill}
    />
  </svg>
);

IconBolt.defaultProps = {
  ...iconDefaultProps,
};

export default IconBolt;
