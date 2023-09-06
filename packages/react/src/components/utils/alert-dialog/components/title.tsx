import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { titleStyle } from "../utils/styled";

export interface TitleProps extends AlertDialogPrimitive.AlertDialogTitleProps {
  className?: string;
}

const TitleDiv = titleStyle(AlertDialogPrimitive.Title);

const Title: React.FC<TitleProps> = ({ className, children, ...rest }) => {
  return <TitleDiv {...rest}>{children}</TitleDiv>;
};

export default Title;
