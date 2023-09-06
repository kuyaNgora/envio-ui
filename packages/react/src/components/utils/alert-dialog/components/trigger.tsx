import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export interface TriggerProps
  extends AlertDialogPrimitive.AlertDialogTriggerProps {
  className?: string;
}

const Trigger: React.FC<TriggerProps> = ({ className, children, ...rest }) => {
  return (
    <AlertDialogPrimitive.Trigger {...rest}>
      {children}
    </AlertDialogPrimitive.Trigger>
  );
};

export default Trigger;
