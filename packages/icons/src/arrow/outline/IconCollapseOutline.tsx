import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCollapse: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4151 8.99901L19.0001 9.00001C19.5521 9.00001 20.0001 9.44801 20.0001 10.001C19.9991 10.553 19.5511 11 19.0001 11H18.9991L14.0241 10.997C13.4741 10.997 13.0271 10.552 13.0241 10.002L13.0001 5.00501C12.9971 4.45301 13.4421 4.00301 13.9951 4.00001H14.0001C14.5501 4.00001 14.9971 4.44401 15.0001 4.99501L15.0121 7.57301L18.2921 4.29301C18.6831 3.90201 19.3161 3.90201 19.7071 4.29301C20.0971 4.68401 20.0971 5.31601 19.7071 5.70701L16.4151 8.99901ZM5.00412 13.0004L10.0011 13.0254C10.5511 13.0284 10.9961 13.4744 10.9961 14.0244L11.0001 18.9994C11.0001 19.5514 10.5521 20.0004 10.0001 20.0004C9.44712 20.0004 9.00012 19.5524 9.00012 19.0014L8.99812 16.4164L5.70712 19.7074C5.51112 19.9024 5.25512 20.0004 5.00012 20.0004C4.74412 20.0004 4.48812 19.9024 4.29312 19.7074C3.90212 19.3164 3.90212 18.6834 4.29312 18.2934L7.57212 15.0134L4.99512 15.0004C4.44212 14.9974 3.99712 14.5464 4.00012 13.9954C4.00212 13.4444 4.45012 13.0004 5.00012 13.0004H5.00412Z"
      fill={fill}
    />
  </svg>
);

IconCollapse.defaultProps = {
  ...iconDefaultProps,
};

export default IconCollapse;
