import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconChevronUp: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9996 15.5002C17.7736 15.5002 17.5466 15.4242 17.3596 15.2682L11.9886 10.7922L6.62663 15.1072C6.19763 15.4542 5.56763 15.3862 5.22063 14.9552C4.87463 14.5252 4.94263 13.8962 5.37363 13.5492L11.3736 8.72117C11.7436 8.42217 12.2746 8.42617 12.6406 8.73217L18.6406 13.7322C19.0646 14.0852 19.1216 14.7162 18.7686 15.1402C18.5706 15.3772 18.2866 15.5002 17.9996 15.5002Z"
      fill={fill}
    />
  </svg>
);

IconChevronUp.defaultProps = {
  ...iconDefaultProps,
};

export default IconChevronUp;
