import React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { Dot } from "@envio-ui/icons";
import { ItemIndicator } from "./indicator";
import { itemStyle } from "../utils/styled";

export interface RadioGroupProps
  extends DropdownPrimitive.DropdownMenuRadioGroupProps {
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <DropdownPrimitive.RadioGroup {...rest}>
      {children}
    </DropdownPrimitive.RadioGroup>
  );
};

export interface RadioItemProps
  extends DropdownPrimitive.DropdownMenuRadioItemProps {
  className?: string;
}

const RadioItemDiv = itemStyle(DropdownPrimitive.RadioItem);

const RadioItem: React.FC<RadioItemProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <RadioItemDiv {...rest}>
      <ItemIndicator>
        <Dot size={8} fill="currentColor" style={{ marginTop: -2 }} />
      </ItemIndicator>
      {children}
    </RadioItemDiv>
  );
};

export { RadioGroup, RadioItem };
