import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";

export interface PortalProps extends DropdownPrimitive.DropdownMenuPortalProps {
  className?: string;
}

const Portal: React.FC<PortalProps> = ({ className, children, ...rest }) => {
  return (
    <DropdownPrimitive.Portal {...rest}>{children}</DropdownPrimitive.Portal>
  );
};

export default Portal;
