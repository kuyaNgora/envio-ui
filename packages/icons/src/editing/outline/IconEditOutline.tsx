import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconEdit: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0197 10.6678L13.3247 7.97281L15.2727 6.02381L17.9667 8.71781L16.0197 10.6678ZM9.0807 17.6138L6.1037 17.8848L6.3677 14.9288L11.9847 9.31181L14.6807 12.0078L9.0807 17.6138ZM19.4047 7.32681L19.4037 7.32581L16.6657 4.58781C15.9247 3.84881 14.6517 3.81381 13.9497 4.51881L4.9537 13.5148C4.6277 13.8398 4.4257 14.2718 4.3837 14.7288L4.0047 18.8988C3.9787 19.1938 4.0837 19.4858 4.2937 19.6958C4.4827 19.8848 4.7377 19.9888 5.0007 19.9888C5.0317 19.9888 5.0617 19.9878 5.0917 19.9848L9.2617 19.6058C9.71971 19.5638 10.1507 19.3628 10.4757 19.0378L19.4727 10.0408C20.2007 9.31081 20.1697 8.09281 19.4047 7.32681Z"
      fill={fill}
    />
  </svg>
);

IconEdit.defaultProps = {
  ...iconDefaultProps,
};

export default IconEdit;
