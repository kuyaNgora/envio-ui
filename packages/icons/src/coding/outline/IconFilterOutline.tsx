import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconFilter: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8772 16.457L12.9032 17.99V13.437C12.9032 13.271 12.9452 13.108 13.0232 12.962L17.3232 5H6.64318L10.7652 12.978C10.8392 13.12 10.8772 13.278 10.8772 13.437V16.457ZM13.9032 21C13.6902 21 13.4772 20.932 13.3002 20.797L9.27418 17.752C9.02418 17.563 8.87718 17.268 8.87718 16.955V13.681L4.11218 4.459C3.95118 4.149 3.96418 3.778 4.14618 3.48C4.32718 3.182 4.65118 3 5.00018 3H19.0002C19.3522 3 19.6782 3.185 19.8592 3.488C20.0392 3.79 20.0472 4.165 19.8802 4.475L14.9032 13.69V20C14.9032 20.379 14.6892 20.726 14.3492 20.895C14.2082 20.965 14.0552 21 13.9032 21Z"
      fill={fill}
    />
  </svg>
);

IconFilter.defaultProps = {
  ...iconDefaultProps,
};

export default IconFilter;
