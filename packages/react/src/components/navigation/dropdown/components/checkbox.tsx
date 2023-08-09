import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckOutline } from "@envio-ui/icons";
import { itemStyle } from "../utils/styled";
import { ItemIndicator } from "./indicator";

export interface CheckboxItemProps
  extends DropdownPrimitive.DropdownMenuCheckboxItemProps {
  className?: string;
  childrens?: React.ReactNode;
}

const CheckboxItemCard = itemStyle(DropdownPrimitive.CheckboxItem);

const CheckboxItem: React.FC<CheckboxItemProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <CheckboxItemCard {...rest}>
      <ItemIndicator>
        <CheckOutline size={15} fill="currentColor" />
      </ItemIndicator>
      {children}
    </CheckboxItemCard>
  );
};

export default CheckboxItem;
