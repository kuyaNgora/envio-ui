import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconShoppingCart: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 26 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.3082 19.5C20.3082 20.329 19.6362 21 18.8082 21C17.9802 21 17.3082 20.329 17.3082 19.5C17.3082 18.671 17.9802 18 18.8082 18C19.6362 18 20.3082 18.671 20.3082 19.5ZM10.3082 19.5C10.3082 20.329 9.63617 21 8.80817 21C7.98017 21 7.30817 20.329 7.30817 19.5C7.30817 18.671 7.98017 18 8.80817 18C9.63617 18 10.3082 18.671 10.3082 19.5ZM17.6902 14H10.0722L8.43517 8H20.6902L17.6902 14ZM22.3912 6.948C22.0242 6.354 21.3882 6 20.6902 6H7.89017L7.27317 3.737C7.15417 3.302 6.75917 3 6.30817 3H4.30817C3.75517 3 3.30817 3.448 3.30817 4C3.30817 4.552 3.75517 5 4.30817 5H5.54417L8.34317 15.263C8.46217 15.698 8.85717 16 9.30817 16H18.3082C18.6872 16 19.0332 15.786 19.2032 15.447L22.4792 8.894C22.7912 8.269 22.7582 7.542 22.3912 6.948Z"
      fill={fill}
    />
  </svg>
);

IconShoppingCart.defaultProps = {
  ...iconDefaultProps,
};

export default IconShoppingCart;
