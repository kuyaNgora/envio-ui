import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPalette: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.7489 7.79903C16.0309 8.21303 15.1139 7.96703 14.6999 7.25003C14.2859 6.53203 14.5319 5.61503 15.2489 5.20103C15.9669 4.78703 16.8839 5.03303 17.2979 5.75003C17.7119 6.46803 17.4659 7.38503 16.7489 7.79903ZM10.999 7.00003C10.1709 7.00003 9.49895 6.32803 9.49895 5.50003C9.49895 4.67203 10.1709 4.00003 10.999 4.00003C11.8269 4.00003 12.499 4.67203 12.499 5.50003C12.499 6.32803 11.8269 7.00003 10.999 7.00003ZM8.29795 9.25003C7.88395 9.96703 6.96695 10.213 6.24895 9.79903C5.53195 9.38503 5.28595 8.46803 5.69995 7.75003C6.11395 7.03303 7.03095 6.78703 7.74895 7.20103C8.46595 7.61503 8.71195 8.53203 8.29795 9.25003ZM6.83795 14.743C6.15095 15.207 5.21895 15.026 4.75595 14.339C4.29195 13.653 4.47395 12.72 5.15995 12.257C5.84695 11.793 6.77895 11.975 7.24195 12.661C7.70595 13.348 7.52395 14.28 6.83795 14.743ZM19.5389 5.08503C17.6159 3.10103 14.8129 1.99303 11.9049 2.00003H11.9039C6.95995 2.04203 2.73995 5.75203 2.09095 10.631C1.70895 13.491 2.56095 16.372 4.42895 18.534C6.29695 20.698 9.00595 21.961 11.8599 22H11.8969C13.0979 22 14.1559 21.213 14.4249 20.114C14.624 19.292 14.417 18.458 13.8569 17.826C13.7759 17.736 13.7289 17.616 13.7289 17.501C13.7289 17.226 13.9539 17.001 14.2289 17.001H15.8799C19.0719 17.001 21.8709 14.403 21.9919 11.329C22.0839 9.02903 21.2129 6.81203 19.5389 5.08503Z"
      fill={fill}
    />
  </svg>
);

IconPalette.defaultProps = {
  ...iconDefaultProps,
};

export default IconPalette;
