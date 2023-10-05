import React from "react";
import * as NavigationPrimitive from "@radix-ui/react-navigation-menu";
import { itemStyle, triggerStyle } from "./utils";

export interface NavbarItemProps
  extends NavigationPrimitive.NavigationMenuTriggerProps {
  icon?: React.ComponentType<any>;
  iconColor?: string;
  title: string;
  disabled?: boolean;
}

const Item = itemStyle(NavigationPrimitive.Item);
const Link = triggerStyle(NavigationPrimitive.Link);

const Nav: React.FC<NavbarItemProps> = ({
  title,
  icon,
  iconColor,
  disabled,
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
      <Link {...rest}>
        {renderIcon()}
        {title}
      </Link>
    </Item>
  );
};

export default Nav;
