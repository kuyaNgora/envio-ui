import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronRightOutline } from "@envio-ui/icons";
import { contentStyle, itemStyle } from "../utils/styled";

export interface SubProps extends DropdownPrimitive.DropdownMenuSubProps {
  className?: string;
}

const Sub: React.FC<SubProps> = ({ className, children, ...rest }) => {
  return <DropdownPrimitive.Sub {...rest}>{children}</DropdownPrimitive.Sub>;
};

export interface SubTriggerProps
  extends DropdownPrimitive.DropdownMenuSubTriggerProps {
  className?: string;
}

const SubTriggerDiv = itemStyle(DropdownPrimitive.SubTrigger);

const SubTrigger = React.forwardRef<HTMLDivElement, SubTriggerProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <SubTriggerDiv {...rest} ref={ref}>
        {children}
        <div className="right-icon">
          <ChevronRightOutline size={15} fill="currentColor" />
        </div>
      </SubTriggerDiv>
    );
  }
);

export interface SubContentProps
  extends DropdownPrimitive.DropdownMenuSubContentProps {
  className?: string;
}

const SubContentDiv = contentStyle(DropdownPrimitive.SubContent);

const SubContent = React.forwardRef<HTMLDivElement, SubContentProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <SubContentDiv {...rest} ref={ref}>
        {children}
      </SubContentDiv>
    );
  }
);

export { Sub, SubTrigger, SubContent };
