import * as React from "react";
import Root from "./root";
import Trigger from "./trigger";
import Portal from "./portal";
import Content from "./content";
import { Arrow, ItemIndicator, Separator } from "./indicator";
import { Group, Item } from "./group";
import Label from "./label";
import CheckboxItem from "./checkbox";
import { RadioGroup, RadioItem } from "./radio";
import { Sub, SubContent, SubTrigger } from "./sub";
import { useComponentStyles } from "../../../../system";

export interface DropdownMenuProps {
  children: React.ReactNode;
}
const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const sx = useComponentStyles("dropdownWrapper");
  return <div style={sx}>{children}</div>;
};

export default Object.assign(DropdownMenu, {
  Root,
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
