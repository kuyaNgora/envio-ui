import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { descriptionStyle } from "../utils/styled";

export interface DescriptionProps
  extends AlertDialogPrimitive.AlertDialogDescriptionProps {
  className?: string;
}

const Div = descriptionStyle(AlertDialogPrimitive.Description);

const Description: React.FC<DescriptionProps> = ({
  className,
  children,
  ...rest
}) => {
  return <Div {...rest}>{children}</Div>;
};

export default Description;
