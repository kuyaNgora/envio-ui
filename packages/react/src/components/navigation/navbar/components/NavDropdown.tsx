/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronDownOutline } from "@envio-ui/icons";
import * as NavigationPrimitive from "@radix-ui/react-navigation-menu";
import React from "react";
import { carretStyle, itemStyle, triggerStyle } from "./utils";

export interface NavDropdownProps
  extends NavigationPrimitive.NavigationMenuTriggerProps {
  icon?: React.ComponentType<any>;
  iconColor?: string;
  title: string;
  withCarret?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Trigger = triggerStyle(NavigationPrimitive.Trigger);
const Carret = carretStyle(ChevronDownOutline);
const Item = itemStyle(NavigationPrimitive.Item);

const NavDropdown: React.FC<NavDropdownProps> = ({
  title,
  icon,
  iconColor,
  disabled,
  children,
  withCarret = true,
  ...rest
}) => {
  const renderIcon = () => {
    return (
      icon && (
        <div>
          {React.createElement(icon, {
            fill: iconColor || "currentColor",
            size: 18,
          })}
        </div>
      )
    );
  };

  return (
    <Item aria-disabled={disabled}>
      <Trigger {...rest}>
        {renderIcon()}
        {title} {withCarret && <Carret fill="currentColor" size={14} />}
      </Trigger>
      {children}
    </Item>
  );
};

export default NavDropdown;
