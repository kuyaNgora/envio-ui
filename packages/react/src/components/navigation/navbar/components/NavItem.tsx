import { ChevronDownOutline } from "@envio-ui/icons";
import * as NavigationPrimitive from "@radix-ui/react-navigation-menu";
import React from "react";
import NavContent from "./NavContent";
import { ChildProps, carretStyle, itemStyle, triggerStyle } from "./utils";

interface NavbarItemProps extends NavigationPrimitive.NavigationMenuItemProps {
  icon?: React.ComponentType<any>;
  isActive?: boolean;
  isDropdown?: boolean;
  title: string;
  disabled?: boolean;
  child?: ChildProps[];
}

const Trigger = triggerStyle(NavigationPrimitive.Trigger);
const Carret = carretStyle(ChevronDownOutline);
const Item = itemStyle(NavigationPrimitive.Item);
const Link = triggerStyle(NavigationPrimitive.Link);

const NavbarItem: React.FC<NavbarItemProps> = ({
  title,
  icon,
  isDropdown,
  disabled,
  child,
}) => {
  const renderIcon = () => {
    return (
      icon && (
        <div style={{ bottom: -1, position: "relative" }}>
          {React.createElement(icon, {
            fill: "currentColor",
            size: 18,
          })}
        </div>
      )
    );
  };

  if (isDropdown) {
    return (
      <Item aria-disabled={disabled}>
        <Trigger>
          {renderIcon()}
          {title} <Carret fill="currentColor" size={14} />
        </Trigger>
        <NavContent menu={child} />
      </Item>
    );
  }

  return (
    <Item aria-disabled={disabled}>
      <Link>
        {renderIcon()}
        {title}
      </Link>
    </Item>
  );
};

export default NavbarItem;
