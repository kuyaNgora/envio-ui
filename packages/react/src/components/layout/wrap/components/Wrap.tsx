/* eslint-disable react/no-array-index-key */
import * as CSS from "csstype";
import React from "react";
import { theme } from "../../../../themes";
import { Box, BoxProps } from "../../box";
import WrapItem from "./WrapItem";

type Space = keyof (typeof theme)["space"];

export interface WrapProps
  extends BoxProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** `align-items` value. */
  alignItems?: CSS.Property.AlignItems;
  /** `justify-content` value. */
  justifyContent?: CSS.Property.JustifyContent;
  /** The space between each child element. */
  spacing?: Space | CSS.Property.Margin;
  /** If `true`, the children will be wrapped with a `WrapItem`. */
  shouldWrapChildren?: boolean;
}

const Wrap = React.forwardRef<HTMLDivElement, WrapProps>(
  (
    {
      children,
      spacing = "xs",
      alignItems,
      justifyContent,
      shouldWrapChildren,
      ...rest
    },
    ref
  ) => {
    const childrenToRender = shouldWrapChildren
      ? React.Children.map(children, (child, index) => (
          <WrapItem key={`wrap-child-${index}`}>{child}</WrapItem>
        ))
      : children;

    return (
      <Box ref={ref} {...rest}>
        <Box
          as="ul"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems,
            justifyContent,
            listStyleType: "none",
            padding: 0,
            gap: spacing,
          }}
        >
          {childrenToRender}
        </Box>
      </Box>
    );
  }
);

Wrap.displayName = "Wrap";

export default Object.assign(Wrap, {
  Item: WrapItem,
});
