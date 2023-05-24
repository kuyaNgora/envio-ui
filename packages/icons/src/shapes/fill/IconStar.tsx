import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconStar: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 25" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5615 22C17.4035 22 17.2445 21.963 17.0985 21.887L11.9995 19.223L6.9015 21.887C6.5635 22.062 6.1555 22.032 5.8495 21.808C5.5415 21.584 5.3885 21.205 5.4535 20.83L6.4245 15.202L2.3045 11.217C2.0305 10.952 1.9315 10.554 2.0485 10.19C2.1655 9.82804 2.4785 9.56304 2.8565 9.50904L8.5565 8.68104L11.1045 3.55504C11.4425 2.87504 12.5575 2.87504 12.8955 3.55504L15.4435 8.68104L21.1435 9.50904C21.5215 9.56304 21.8345 9.82804 21.9515 10.19C22.0685 10.554 21.9695 10.952 21.6955 11.217L17.5755 15.202L18.5465 20.83C18.6115 21.205 18.4575 21.584 18.1505 21.808C17.9765 21.936 17.7695 22 17.5615 22Z"
      fill={fill}
    />
  </svg>
);

IconStar.defaultProps = {
  ...iconDefaultProps,
};

export default IconStar;
