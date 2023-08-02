import { IconChevronDownOutline } from "@envio-ui/icons";
import * as NavigationPrimitive from "@radix-ui/react-navigation-menu";
import React from "react";
import styled from "styled-components";
import NavContent from "./NavContent";
import { ChildProps } from "./utils";

interface NavbarItemProps extends NavigationPrimitive.NavigationMenuItemProps {
  icon?: React.ComponentType<any>;
  isActive?: boolean;
  isDropdown?: boolean;
  title: string;
  disabled?: boolean;
  child?: ChildProps[];
}

const Trigger = styled(NavigationPrimitive.Trigger)`
  min-height: 2rem;
  min-width: 2rem;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  font-size: 13px;
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  justify-content: space-between;
  gap: 4px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: hsla(0, 0%, 100%, 0.7);

  &:hover,
  &:focus,
  &[data-state="open"] {
    background-color: rgba(var(--nvo-primary-rgb), 0.16);
    color: #fff;
  }
`;

const Carret = styled(IconChevronDownOutline)`
  position: relative;
  top: 1px;
  transition: transform 250ms ease;
  &[data-state="open"] {
    transform: rotate(-180deg);
  }
`;

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

  return (
    <NavigationPrimitive.Item aria-disabled={disabled}>
      <Trigger>
        {renderIcon()}
        {title} {isDropdown && <Carret fill="currentColor" size={14} />}
      </Trigger>
      {isDropdown && <NavContent menu={child} />}
    </NavigationPrimitive.Item>
  );
};

export default NavbarItem;
