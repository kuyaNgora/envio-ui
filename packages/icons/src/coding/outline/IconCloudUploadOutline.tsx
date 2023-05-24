import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconCloudUpload: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9998 2.99988C14.5808 2.99988 16.8548 4.66088 17.6748 7.04488C20.1138 7.37588 21.9998 9.47188 21.9998 11.9999C21.9998 13.2209 21.5558 14.3959 20.7498 15.3089C20.5518 15.5319 20.2768 15.6469 19.9998 15.6469C19.7648 15.6469 19.5288 15.5649 19.3378 15.3969C18.9248 15.0299 18.8848 14.3989 19.2508 13.9839C19.7338 13.4379 19.9998 12.7319 19.9998 11.9999C19.9998 10.3459 18.6538 8.99988 16.9998 8.99988H16.8998C16.4238 8.99988 16.0138 8.66388 15.9198 8.19688C15.5458 6.34488 13.8978 4.99988 11.9998 4.99988C10.1028 4.99988 8.4538 6.34488 8.0808 8.19688C7.9868 8.66388 7.5758 8.99988 7.0998 8.99988H6.9998C5.3458 8.99988 3.9998 10.3459 3.9998 11.9999C3.9998 12.7319 4.2658 13.4379 4.7498 13.9839C5.1148 14.3989 5.0758 15.0299 4.6618 15.3969C4.2478 15.7629 3.6158 15.7219 3.2508 15.3089C2.4438 14.3959 1.9998 13.2209 1.9998 11.9999C1.9998 9.47188 3.8858 7.37588 6.3248 7.04488C7.1458 4.66088 9.4198 2.99988 11.9998 2.99988ZM11.305 11.28C11.699 10.904 12.322 10.907 12.707 11.293L15.707 14.293C16.098 14.684 16.098 15.316 15.707 15.707C15.512 15.902 15.256 16 15 16C14.744 16 14.488 15.902 14.293 15.707L13 14.414V20C13 20.553 12.552 21 12 21C11.448 21 11 20.553 11 20V14.356L9.695 15.616C9.298 16.001 8.665 15.988 8.281 15.591C7.897 15.193 7.908 14.561 8.305 14.177L11.305 11.28Z"
      fill={fill}
    />
  </svg>
);

IconCloudUpload.defaultProps = {
  ...iconDefaultProps,
};

export default IconCloudUpload;
