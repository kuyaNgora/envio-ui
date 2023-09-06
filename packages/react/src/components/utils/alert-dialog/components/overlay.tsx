import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { overlayStyle } from "../utils/styled";

export interface OverlayProps
  extends AlertDialogPrimitive.AlertDialogOverlayProps {
  className?: string;
}

const OverlayDiv = overlayStyle(AlertDialogPrimitive.Overlay);

const Overlay: React.FC<OverlayProps> = ({ className, children, ...rest }) => {
  return <OverlayDiv {...rest} />;
};

export default Overlay;
