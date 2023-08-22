/* eslint-disable react/no-array-index-key */
import * as NavigationPrimitive from "@radix-ui/react-navigation-menu";
import React from "react";
import {
  listStyle,
  rootStyle,
  viewportStyle,
  viewportWrapperStyle,
} from "./utils";
import NavDropdown from "./NavDropdown";
import Nav from "./Nav";
import NavContent from "./NavContent";

export interface NavbarProps {
  className?: string;
  style?: React.CSSProperties;

  //   brand
  brand?: string;
  brandStyle?: React.CSSProperties;
  brandClassName?: string;

  //   menu
  children?: React.ReactNode;

  // action
  actions?: React.ReactNode;
}

const Root = rootStyle(NavigationPrimitive.Root);
const List = listStyle(NavigationPrimitive.List);
const ViewportWrapper = viewportWrapperStyle("div");
const Viewport = viewportStyle(NavigationPrimitive.Viewport);

const Navbar: React.FC<NavbarProps> = ({
  className,
  style,
  brand,
  brandStyle,
  brandClassName,
  children,
  actions,
  ...rest
}) => {
  return (
    <Root {...rest} style={style}>
      <List>{children}</List>
      <ViewportWrapper>
        <Viewport />
      </ViewportWrapper>
    </Root>
  );
};

export default Object.assign(Navbar, {
  Nav,
  Dropdown: NavDropdown,
  Content: NavContent,
});
