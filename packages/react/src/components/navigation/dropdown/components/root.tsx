import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import Trigger from "./trigger";
import Portal from "./portal";
import Content from "./content";
import { Arrow, ItemIndicator, Separator } from "./indicator";
import { Group, Item } from "./group";
import Label from "./label";
import CheckboxItem from "./checkbox";
import { RadioGroup, RadioItem } from "./radio";
import { Sub, SubContent, SubTrigger } from "./sub";

export interface DropdownMenuProps extends DropdownPrimitive.DropdownMenuProps {
  className?: string;
}

const Dropdown: React.FC<DropdownMenuProps> = ({
  className,
  children,
  ...rest
}) => {
  return <DropdownPrimitive.Root {...rest}>{children}</DropdownPrimitive.Root>;
};
export default Object.assign(Dropdown, {
  Trigger,
  Portal,
  Content,
  Arrow,
  Item,
  Group,
  Label,
  CheckboxItem,
  RadioGroup,
  RadioItem,
  ItemIndicator,
  Separator,
  Sub,
  SubTrigger,
  SubContent,
});
