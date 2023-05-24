import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconEyeSlash: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.8677 12.4979C21.4527 13.2209 20.4767 14.7389 18.9547 16.1269L17.5437 14.7159C18.6037 13.7649 19.3707 12.7189 19.8267 12.0049C18.8947 10.5859 16.0717 6.89387 11.7807 7.00287C11.1807 7.01787 10.6177 7.11187 10.0817 7.25387L8.50172 5.67387C9.47372 5.28987 10.5447 5.03387 11.7297 5.00387C17.7047 4.81687 21.2297 10.3909 21.8677 11.5029C22.0437 11.8109 22.0437 12.1899 21.8677 12.4979ZM13.9177 16.7469L15.4977 18.3269C14.5267 18.7109 13.4547 18.9669 12.2707 18.9969C12.1887 18.9989 12.1067 18.9999 12.0247 18.9999C6.16172 18.9999 2.76172 13.5949 2.13272 12.4979C1.95572 12.1899 1.95572 11.8109 2.13272 11.5029C2.54672 10.7799 3.52272 9.26187 5.04472 7.87287L6.45572 9.28487C5.39572 10.2359 4.62972 11.2819 4.17272 11.9959C5.10472 13.4149 7.91472 17.0979 12.2197 16.9979C12.8197 16.9829 13.3827 16.8889 13.9177 16.7469ZM11.9997 13.4999C11.1727 13.4999 10.4997 12.8279 10.4997 11.9999C10.4997 11.9749 10.5107 11.9519 10.5117 11.9259L12.0747 13.4889C12.0487 13.4899 12.0257 13.4999 11.9997 13.4999ZM4.70672 3.29287C4.31672 2.90287 3.68372 2.90287 3.29272 3.29287C2.90272 3.68387 2.90272 4.31687 3.29272 4.70687L8.92372 10.3379C8.64672 10.8459 8.49972 11.4109 8.49972 11.9999C8.49972 13.9299 10.0707 15.4999 11.9997 15.4999C12.5897 15.4999 13.1547 15.3529 13.6627 15.0769L19.2927 20.7069C19.4887 20.9029 19.7437 20.9999 19.9997 20.9999C20.2557 20.9999 20.5117 20.9029 20.7067 20.7069C21.0977 20.3169 21.0977 19.6839 20.7067 19.2929L4.70672 3.29287Z"
      fill={fill}
    />
  </svg>
);

IconEyeSlash.defaultProps = {
  ...iconDefaultProps,
};

export default IconEyeSlash;
