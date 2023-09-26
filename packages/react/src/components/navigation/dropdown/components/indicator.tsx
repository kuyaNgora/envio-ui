import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export interface ItemIndicatorProps
  extends DropdownPrimitive.DropdownMenuItemIndicatorProps {
  className?: string;
}

const ItemIndicatorCard = styled(DropdownPrimitive.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const ItemIndicator = React.forwardRef<HTMLSpanElement, ItemIndicatorProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <ItemIndicatorCard {...rest} ref={ref}>
        {children}
      </ItemIndicatorCard>
    );
  }
);

export interface SeparatorProps
  extends DropdownPrimitive.DropdownMenuSeparatorProps {
  className?: string;
}

const SeparatorDiv = styled(DropdownPrimitive.Separator)`
  height: 1px;
  margin: 5px;
  background-color: var(--nvo-dark);
`;

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <SeparatorDiv {...rest} ref={ref}>
        {children}
      </SeparatorDiv>
    );
  }
);

export interface ArrowProps extends DropdownPrimitive.DropdownMenuArrowProps {
  className?: string;
}

const Arrow = React.forwardRef<SVGSVGElement, ArrowProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <DropdownPrimitive.Arrow {...rest} style={{ fill: "white" }} ref={ref}>
        {children}
      </DropdownPrimitive.Arrow>
    );
  }
);

export { ItemIndicator, Separator, Arrow };
