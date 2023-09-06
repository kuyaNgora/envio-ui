/* eslint-disable react/no-array-index-key */
import * as NavigationPrimitive from "@radix-ui/react-navigation-menu";
import React from "react";
import { contentStyle, ulStyle } from "./utils";

export interface NavContentProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const UL = ulStyle("ul");
const Content = contentStyle(NavigationPrimitive.Content);

const NavContent: React.FC<
  NavContentProps & NavigationPrimitive.NavigationMenuContentProps
> = ({ children, className, style }) => {
  return (
    <div style={{ position: "relative", zIndex: 99999 }}>
      <Content className={className} style={style}>
        <UL>{children}</UL>
      </Content>
    </div>
  );
};

export default NavContent;
