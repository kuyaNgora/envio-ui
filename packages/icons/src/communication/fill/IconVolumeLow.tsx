import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconVolumeLow: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.428 3.17548C15.734 2.96548 16.131 2.94148 16.46 3.11548C16.788 3.28848 16.994 3.62948 16.994 4.00048V20.0005C16.994 20.3715 16.788 20.7125 16.46 20.8855C16.314 20.9625 16.153 21.0005 15.994 21.0005C15.795 21.0005 15.598 20.9415 15.428 20.8255L9.01702 16.4285H3.99402C3.44102 16.4285 2.99402 15.9815 2.99402 15.4285V8.57148C2.99402 8.01848 3.44102 7.57148 3.99402 7.57148H9.01702L15.428 3.17548ZM19.367 8.22128C19.796 7.87628 20.427 7.94328 20.773 8.37328C22.409 10.4073 22.409 13.5933 20.773 15.6273C20.575 15.8723 20.285 16.0003 19.993 16.0003C19.773 16.0003 19.552 15.9283 19.367 15.7793C18.937 15.4333 18.868 14.8043 19.214 14.3733C20.25 13.0873 20.25 10.9133 19.214 9.62728C18.868 9.19628 18.937 8.56728 19.367 8.22128Z"
      fill={fill}
    />
  </svg>
);

IconVolumeLow.defaultProps = {
  ...iconDefaultProps,
};

export default IconVolumeLow;
