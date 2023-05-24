import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconVolumeLow: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.9932 5.89865L9.89223 9.39665C9.72523 9.50965 9.52823 9.57165 9.32623 9.57165H4.99323V14.4287H9.32623C9.52823 14.4287 9.72523 14.4907 9.89223 14.6037L14.9932 18.1017V5.89865ZM16.9932 4.00065V20.0007C16.9932 20.3717 16.7872 20.7117 16.4592 20.8847C16.3132 20.9617 16.1532 21.0007 15.9932 21.0007C15.7952 21.0007 15.5972 20.9417 15.4282 20.8257L9.01622 16.4287H3.99323C3.44123 16.4287 2.99323 15.9817 2.99323 15.4287V8.57165C2.99323 8.01865 3.44123 7.57165 3.99323 7.57165H9.01622L15.4282 3.17465C15.7342 2.96465 16.1312 2.94165 16.4592 3.11565C16.7872 3.28865 16.9932 3.62865 16.9932 4.00065ZM20.7722 15.6277C20.5752 15.8727 20.2852 16.0007 19.9932 16.0007C19.7722 16.0007 19.5512 15.9277 19.3662 15.7797C18.9362 15.4327 18.8682 14.8037 19.2142 14.3737C20.2492 13.0867 20.2492 10.9137 19.2142 9.62765C18.8682 9.19665 18.9362 8.56765 19.3662 8.22065C19.7962 7.87665 20.4262 7.94365 20.7722 8.37365C22.4092 10.4077 22.4092 13.5927 20.7722 15.6277Z"
      fill={fill}
    />
  </svg>
);

IconVolumeLow.defaultProps = {
  ...iconDefaultProps,
};

export default IconVolumeLow;
