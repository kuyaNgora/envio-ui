import React from "react";
import * as NavigationPrimitive from "@radix-ui/react-navigation-menu";
import { itemStyle, triggerStyle } from "./utils";

export interface NavbarItemProps
  extends NavigationPrimitive.NavigationMenuItemProps {
  icon?: React.ComponentType<any>;
  isActive?: boolean;
  title: string;
  disabled?: boolean;
  as?: "nav" | "item";
}

const Item = itemStyle(NavigationPrimitive.Item);
const Link = triggerStyle(NavigationPrimitive.Link);

const Nav: React.FC<NavbarItemProps> = ({
  title,
  isActive,
  icon,
  disabled,
  as = "nav",
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
    <Item aria-disabled={disabled}>
      <Link active={isActive}>
        {renderIcon()}
        {title}
      </Link>
    </Item>
  );
};

export default Nav;
