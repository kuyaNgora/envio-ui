import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import Trigger from "./trigger";
import Portal from "./portal";
import Content from "./content";
import Overlay from "./overlay";
import Title from "./title";
import Description from "./description";

export interface AlertDialogProps
  extends AlertDialogPrimitive.AlertDialogProps {
  className?: string;
}

const AlertDialog = React.forwardRef<HTMLDialogElement, AlertDialogProps>(
  ({ className, children, ...rest }) => {
    return (
      <AlertDialogPrimitive.Root {...rest}>
        {children}
      </AlertDialogPrimitive.Root>
    );
  }
);

export default Object.assign(AlertDialog, {
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
});
