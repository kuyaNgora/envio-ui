import { ChevronDownOutline } from "@envio-ui/icons";
import * as NavigationPrimitive from "@radix-ui/react-navigation-menu";
import React from "react";
import {
  arrowStyle,
  carretStyle,
  indicatorStyle,
  itemStyle,
  triggerStyle,
} from "./utils";

export interface NavDropdownProps
  extends NavigationPrimitive.NavigationMenuItemProps {
  icon?: React.ComponentType<any>;
  title: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Trigger = triggerStyle(NavigationPrimitive.Trigger);
const Carret = carretStyle(ChevronDownOutline);
const Item = itemStyle(NavigationPrimitive.Item);
const Indicator = indicatorStyle(NavigationPrimitive.Indicator);
const Arrow = arrowStyle("div");

const NavDropdown: React.FC<NavDropdownProps> = ({
  title,
  icon,
  disabled,
  children,
}) => {
  const renderIcon = () => {
    return (
      icon && (
        // <div style={{ bottom: -1, position: "relative" }}>
        <div>
          {React.createElement(icon, {
            fill: "currentColor",
            size: 18,
          })}
        </div>
      )
    );
  };
  return (
    <>
      <Item aria-disabled={disabled}>
        <Trigger>
          {renderIcon()}
          {title} <Carret fill="currentColor" size={14} />
        </Trigger>
        {children}
      </Item>
      <Indicator>
        <Arrow />
      </Indicator>
    </>
  );
};

export default NavDropdown;
