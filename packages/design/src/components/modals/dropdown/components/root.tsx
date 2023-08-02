import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";

export interface RootProps extends DropdownPrimitive.DropdownMenuProps {
  className?: string;
}

const Root: React.FC<RootProps> = ({ className, children, ...rest }) => {
  return <DropdownPrimitive.Root {...rest}>{children}</DropdownPrimitive.Root>;
};

export default Root;
