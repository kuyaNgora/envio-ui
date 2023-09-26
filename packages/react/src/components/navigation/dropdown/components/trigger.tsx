import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";

export interface TriggerProps
  extends DropdownPrimitive.DropdownMenuTriggerProps {
  className?: string;
}

const Trigger = React.forwardRef<HTMLButtonElement, TriggerProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <DropdownPrimitive.Trigger {...rest} ref={ref}>
        {children}
      </DropdownPrimitive.Trigger>
    );
  }
);

export default Trigger;
