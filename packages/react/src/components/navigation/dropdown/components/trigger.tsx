import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";

export interface TriggerProps
  extends DropdownPrimitive.DropdownMenuTriggerProps {
  className?: string;
}

const Trigger: React.FC<TriggerProps> = ({ className, children, ...rest }) => {
  return (
    <DropdownPrimitive.Trigger {...rest}>{children}</DropdownPrimitive.Trigger>
  );
};

export default Trigger;
