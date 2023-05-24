import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconArrowDownRight: React.FC<BaseIconProps> = ({
  size,
  fill,
  ...props
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0002 8.00025C16.4473 8.00025 16.0002 8.44825 16.0002 9.00025V14.5863L7.70725 6.29325C7.31625 5.90225 6.68425 5.90225 6.29325 6.29325C5.90225 6.68425 5.90225 7.31625 6.29325 7.70725L14.5863 16.0002H9.00025C8.44725 16.0002 8.00025 16.4482 8.00025 17.0002C8.00025 17.5522 8.44725 18.0002 9.00025 18.0002H17.0002C17.5532 18.0002 18.0002 17.5522 18.0002 17.0002V9.00025C18.0002 8.44825 17.5532 8.00025 17.0002 8.00025Z"
      fill={fill}
    />
  </svg>
);

IconArrowDownRight.defaultProps = {
  ...iconDefaultProps,
};

export default IconArrowDownRight;
