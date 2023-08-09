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

const ItemIndicator: React.FC<ItemIndicatorProps> = ({
  className,
  children,
  ...rest
}) => {
  return <ItemIndicatorCard {...rest}>{children}</ItemIndicatorCard>;
};

export interface SeparatorProps
  extends DropdownPrimitive.DropdownMenuSeparatorProps {
  className?: string;
}

const SeparatorDiv = styled(DropdownPrimitive.Separator)`
  height: 1px;
  margin: 5px;
  background-color: var(--nvo-dark);
`;

const Separator: React.FC<SeparatorProps> = ({
  className,
  children,
  ...rest
}) => {
  return <SeparatorDiv {...rest}>{children}</SeparatorDiv>;
};

export interface ArrowProps extends DropdownPrimitive.DropdownMenuArrowProps {
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({ className, children, ...rest }) => {
  return (
    <DropdownPrimitive.Arrow {...rest} style={{ fill: "white" }}>
      {children}
    </DropdownPrimitive.Arrow>
  );
};

export { ItemIndicator, Separator, Arrow };
