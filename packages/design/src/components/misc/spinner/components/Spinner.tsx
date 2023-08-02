import * as React from "react";
import { Box, BoxProps } from "../../../core";

export interface SpinnerProps extends BoxProps {
  /** Additional classes to give to the component. */
  className?: string;
  /** Additional styles to give to the component. */
  style?: React.CSSProperties;
  /** The color of the spinner. */
  variant?: string;
  /** The speed of the spinner. */
  speed?: string;
  /** The size of the spinner. */
  size?: number;
}

/**
 * Spinner is used to indicate the loading state of a page or a component.
 */
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (
    { className, style, speed = "1s", variant = "primary", size = 24, ...rest },
    ref
  ) => {
    return (
      <Box
        className={className}
        style={style}
        ref={ref}
        display="inline-block"
        width={size}
        height={size}
        color={variant}
        {...rest}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 12.019c0 6.3-4.848 11.469-11.018 11.978-.551.045-1.001-.407-1.001-.96v-1.002c5.532 0 10.016-4.484 10.016-10.016S17.513 2.003 11.98 2.003c-5.194 0-9.465 3.954-9.966 9.016-.055.55-.498 1-1.051 1-.554 0-1.006-.45-.96-1.001C.511 4.848 5.68 0 11.98 0 18.619 0 24 5.381 24 12.019z"
            fill="currentColor"
          >
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 12 12"
              to="360 12 12"
              dur={speed}
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </Box>
    );
  }
);

Spinner.displayName = "Spinner";

export default Spinner;
