import * as React from "react";
import styled, { keyframes } from "styled-components";
import { useComponentStyles } from "../../../../system";
import { theme } from "../../../../themes";
import { Box, BoxProps } from "../../../core";

type SkeletonType = "line" | "circle";

const progress = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
`;

export interface SkeletonProps extends BoxProps {
  /** Additional classes to give to the component. */
  className?: string;
  /** Additional styles to give to the component. */
  style?: React.CSSProperties;
  /** The type of the skeleton. */
  type?: SkeletonType;
  /** The size of the skeleton. */
  size?: number | object;
  /** The size of the skeleton. */
  numberOfLines?: number;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    { className, style, size = 24, type = "line", numberOfLines, ...rest },
    ref
  ) => {
    const styles = useComponentStyles("skeleton", {
      type: typeof type === "string" ? type : undefined,
    });

    if (type === "circle") {
      return (
        <Box
          className={className}
          style={style}
          sx={{ ...styles }}
          ref={ref}
          {...rest}
          width={typeof size === "number" ? size : undefined}
          height={typeof size === "number" ? size : undefined}
        />
      );
    }

    if (type === "line" && numberOfLines && numberOfLines > 1) {
      return (
        <Multiline>
          {[...Array(numberOfLines)].map((_, _i) => (
            <Box
              className={className}
              style={style}
              sx={{ ...styles }}
              ref={ref}
              width={"100%"}
              height={typeof size === "number" ? size : undefined}
              {...rest}
            />
          ))}
        </Multiline>
      );
    }

    return (
      <Box
        className={className}
        style={style}
        sx={{ ...styles }}
        ref={ref}
        width={"100%"}
        height={typeof size === "number" ? size : undefined}
        {...rest}
      />
    );
  }
);

const SkeletonAnimation = styled(Skeleton)`
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${theme?.colors?.greylight04},
      ${theme?.colors?.greylight03},
      ${theme?.colors?.greylight04}
    );
    animation: ${progress} 1s ease-in-out infinite;
  }
`;

const Multiline = styled("div")`
  ${SkeletonAnimation} {
    margin-bottom: ${theme?.space?.xs}px;

    &:last-child {
      width: 65%;
    }
  }
`;

SkeletonAnimation.displayName = "Skeleton";

export default SkeletonAnimation;
