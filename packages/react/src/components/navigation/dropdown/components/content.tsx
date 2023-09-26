import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { contentStyle } from "../utils/styled";
import { Arrow } from "./indicator";

export interface ContentProps
  extends DropdownPrimitive.DropdownMenuContentProps {
  className?: string;
}

const ContentDiv = contentStyle(DropdownPrimitive.Content);

const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <ContentDiv {...rest} ref={ref}>
        {children}
        <Arrow />
      </ContentDiv>
    );
  }
);

export default Content;
