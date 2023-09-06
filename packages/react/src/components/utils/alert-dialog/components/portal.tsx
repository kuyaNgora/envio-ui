import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export interface PortalProps
  extends AlertDialogPrimitive.AlertDialogPortalProps {
  className?: string;
}

const Portal: React.FC<PortalProps> = ({ className, children, ...rest }) => {
  return (
    <AlertDialogPrimitive.Portal {...rest}>
      {children}
    </AlertDialogPrimitive.Portal>
  );
};

export default Portal;
