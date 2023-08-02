import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { itemStyle } from "../utils/styled";

export interface GroupProps extends DropdownPrimitive.DropdownMenuGroupProps {
  className?: string;
}

const Group: React.FC<GroupProps> = ({ className, children, ...rest }) => {
  return (
    <DropdownPrimitive.Group asChild {...rest}>
      {children}
    </DropdownPrimitive.Group>
  );
};

//

export interface ItemProps extends DropdownPrimitive.DropdownMenuItemProps {
  className?: string;
}

const ItemCard = itemStyle(DropdownPrimitive.Item);

const Item: React.FC<ItemProps> = ({ className, children, ...rest }) => {
  return <ItemCard {...rest}>{children}</ItemCard>;
};

export { Group, Item };
