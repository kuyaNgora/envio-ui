import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export interface CancelProps
  extends AlertDialogPrimitive.AlertDialogCancelProps {
  className?: string;
}

const Cancel: React.FC<CancelProps> = ({ className, children, ...rest }) => {
  return (
    <AlertDialogPrimitive.Cancel {...rest}>
      {children}
    </AlertDialogPrimitive.Cancel>
  );
};

export default Cancel;
