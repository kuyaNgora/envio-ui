import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { Dot } from "@envio-ui/icons";
import { ItemIndicator } from "./indicator";
import { itemStyle } from "../utils/styled";

export interface RadioGroupProps
  extends DropdownPrimitive.DropdownMenuRadioGroupProps {
  className?: string;
}

const RadioGroup = React.forwardRef<HTMLInputElement, RadioGroupProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <DropdownPrimitive.RadioGroup {...rest} ref={ref}>
        {children}
      </DropdownPrimitive.RadioGroup>
    );
  }
);

export interface RadioItemProps
  extends DropdownPrimitive.DropdownMenuRadioItemProps {
  className?: string;
}

const RadioItemDiv = itemStyle(DropdownPrimitive.RadioItem);

const RadioItem = React.forwardRef<HTMLDivElement, RadioItemProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <RadioItemDiv {...rest} ref={ref}>
        <ItemIndicator>
          <Dot size={8} fill="currentColor" style={{ marginTop: -2 }} />
        </ItemIndicator>
        {children}
      </RadioItemDiv>
    );
  }
);

export { RadioGroup, RadioItem };
