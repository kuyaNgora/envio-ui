import * as React from "react";
import { BaseIconProps, iconDefaultProps } from "../../utils/types";

const IconVideoOff: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 9.40049L17.191 12.0005L20 14.5995V9.40049ZM22 8.62949V15.3705C22 16.0195 21.621 16.5885 21.012 16.8545C20.788 16.9525 20.553 17.0005 20.319 17.0005C20.113 17.0005 19.91 16.9625 19.718 16.8895L15 12.1715V8.00049C15 7.44849 14.552 7.00049 14 7.00049H9.828L7.828 5.00049H14C15.654 5.00049 17 6.34549 17 8.00049V9.45149L19.161 7.45149C19.66 6.99149 20.386 6.87349 21.012 7.14549C21.621 7.41149 22 7.98049 22 8.62949ZM14 17.0005H5C4.448 17.0005 4 16.5515 4 16.0005V8.00049C4 7.67949 4.161 7.40749 4.396 7.22349L2.974 5.80149C2.379 6.35049 2 7.12949 2 8.00049V16.0005C2 17.6545 3.346 19.0005 5 19.0005H14C14.616 19.0005 15.188 18.8125 15.665 18.4935L14.143 16.9705C14.094 16.9785 14.051 17.0005 14 17.0005ZM20.707 19.2935C21.098 19.6835 21.098 20.3165 20.707 20.7075C20.512 20.9025 20.256 21.0005 20 21.0005C19.744 21.0005 19.488 20.9025 19.293 20.7075L16.386 17.7995L14.931 16.3445L5.586 7.00049L3.826 5.24049L3.293 4.70749C2.902 4.31649 2.902 3.68349 3.293 3.29349C3.684 2.90249 4.316 2.90249 4.707 3.29349L6.414 5.00049L8.414 7.00049L15 13.5865L17 15.5865L20.707 19.2935Z"
      fill={fill}
    />
  </svg>
);

IconVideoOff.defaultProps = {
  ...iconDefaultProps,
};

export default IconVideoOff;
