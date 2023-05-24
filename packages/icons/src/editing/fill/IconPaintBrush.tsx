import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconPaintBrush: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.3757 4.66785C17.1527 3.89085 18.4227 3.75285 19.2617 4.46085C19.7547 4.87785 20.0077 5.46285 19.9997 6.05685C20.0067 6.59385 19.8017 7.12285 19.3977 7.52685L12.9127 14.0178C12.7297 14.2018 12.4317 14.2018 12.2477 14.0178L9.97469 11.7428C9.79069 11.5588 9.79069 11.2598 9.97469 11.0758L16.3757 4.66785ZM4.05399 16.4138C4.08599 14.5778 5.32899 12.9178 7.12399 12.5478C10.047 11.9448 12.462 14.7418 11.167 17.7378C10.583 19.0878 9.19599 19.9148 7.72699 19.9408H7.72499L4.47899 19.9998C4.21299 20.0048 3.99499 19.7868 3.99999 19.5208L4.05399 16.4138Z"
      fill={fill}
    />
  </svg>
);

IconPaintBrush.defaultProps = {
  ...iconDefaultProps,
};

export default IconPaintBrush;
