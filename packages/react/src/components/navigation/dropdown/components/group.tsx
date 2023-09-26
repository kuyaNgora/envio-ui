import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { itemStyle } from "../utils/styled";

export interface GroupProps extends DropdownPrimitive.DropdownMenuGroupProps {
  className?: string;
}

const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <DropdownPrimitive.Group asChild {...rest} ref={ref}>
        {children}
      </DropdownPrimitive.Group>
    );
  }
);

//

export interface ItemProps extends DropdownPrimitive.DropdownMenuItemProps {
  className?: string;
}

const ItemCard = itemStyle(DropdownPrimitive.Item);

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <ItemCard {...rest} ref={ref}>
        {children}
      </ItemCard>
    );
  }
);

export { Group, Item };
