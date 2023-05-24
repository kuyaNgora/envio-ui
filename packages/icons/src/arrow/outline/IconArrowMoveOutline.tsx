import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowMove: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.709 11.308L18.709 8.295C18.319 7.904 17.685 7.901 17.295 8.292C16.903 8.682 16.901 9.314 17.291 9.706L18.58 11H13V5.409L14.291 6.706C14.486 6.902 14.743 7 15 7C15.255 7 15.511 6.903 15.706 6.709C16.097 6.319 16.099 5.686 15.709 5.295L12.722 2.295C12.533 2.106 12.315 2.009 12.013 2C11.748 2 11.494 2.105 11.307 2.292L8.29401 5.292C7.90301 5.682 7.90101 6.315 8.29101 6.706C8.68001 7.097 9.31301 7.099 9.70601 6.709L11 5.42V11H5.40801L6.70501 9.709C7.09701 9.319 7.09901 8.686 6.70901 8.295C6.31901 7.904 5.68501 7.901 5.29501 8.292L2.29501 11.279C2.10601 11.466 2.00101 11.72 2.00001 11.985C1.99901 12.25 2.10501 12.505 2.29101 12.693L5.29101 15.706C5.48601 15.902 5.74301 16 6.00001 16C6.25501 16 6.51101 15.903 6.70501 15.709C7.09701 15.319 7.09901 14.686 6.70901 14.295L5.42001 13H11V18.592L9.70901 17.295C9.31901 16.903 8.68601 16.901 8.29401 17.292C7.90301 17.682 7.90101 18.315 8.29101 18.706L11.278 21.706C11.466 21.894 11.72 22 11.985 22H11.987C12.252 22 12.506 21.895 12.693 21.709L15.706 18.709C16.097 18.319 16.099 17.686 15.709 17.295C15.319 16.903 14.686 16.901 14.294 17.292L13 18.58V13H18.592L17.295 14.292C16.903 14.682 16.901 15.314 17.291 15.706C17.486 15.902 17.743 16 18 16C18.255 16 18.511 15.903 18.705 15.709L21.705 12.722C21.894 12.535 21.999 12.281 22 12.016C22.001 11.75 21.896 11.496 21.709 11.308Z"
      fill={fill}
    />
  </svg>
);

IconArrowMove.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowMove;
