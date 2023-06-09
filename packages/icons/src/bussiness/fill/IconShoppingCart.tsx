import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconShoppingCart: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 25 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.6994 6.94812C21.3324 6.35412 20.6964 6.00012 19.9984 6.00012H7.19836L6.58136 3.73712C6.46236 3.30212 6.06736 3.00012 5.61636 3.00012H3.61636C3.06336 3.00012 2.61636 3.44812 2.61636 4.00012C2.61636 4.55212 3.06336 5.00012 3.61636 5.00012H4.85236L7.65136 15.2631C7.77036 15.6981 8.16536 16.0001 8.61636 16.0001H17.6164C17.9954 16.0001 18.3414 15.7861 18.5114 15.4471L21.7874 8.89412C22.0994 8.26912 22.0664 7.54212 21.6994 6.94812ZM8.11636 17.9999C7.28836 17.9999 6.61636 18.6709 6.61636 19.4999C6.61636 20.3289 7.28836 20.9999 8.11636 20.9999C8.94436 20.9999 9.61636 20.3289 9.61636 19.4999C9.61636 18.6709 8.94436 17.9999 8.11636 17.9999ZM16.6164 19.4999C16.6164 18.6709 17.2884 17.9999 18.1164 17.9999C18.9444 17.9999 19.6164 18.6709 19.6164 19.4999C19.6164 20.3289 18.9444 20.9999 18.1164 20.9999C17.2884 20.9999 16.6164 20.3289 16.6164 19.4999Z"
      fill={fill}
    />
  </svg>
);

IconShoppingCart.defaultProps = {
  ...iconDefaultProps,
};

export default IconShoppingCart;
