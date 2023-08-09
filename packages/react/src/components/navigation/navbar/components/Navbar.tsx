/* eslint-disable react/no-array-index-key */
import * as NavigationPrimitive from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import React from "react";
import { useComponentStyles } from "../../../../system";
import { Stack, StackProps } from "../../../layout";
import NavItem from "./NavItem";
import {
  MenuProps,
  arrowStyle,
  indicatorStyle,
  listStyle,
  rootStyle,
  viewportStyle,
  viewportWrapperStyle,
} from "./utils";

export interface NavbarProps extends Omit<StackProps, ""> {
  className?: string;
  style?: React.CSSProperties;

  //   brand
  brand?: string;
  brandStyle?: React.CSSProperties;
  brandClassName?: string;

  //   menu
  menu?: MenuProps[];

  // action
  actions?: React.ReactNode;

  // theme
  theme?: "light" | "dark";
}

const Root = rootStyle(NavigationPrimitive.Root);
const List = listStyle(NavigationPrimitive.List);
const Indicator = indicatorStyle(NavigationPrimitive.Indicator);
const Arrow = arrowStyle("div");
const ViewportWrapper = viewportWrapperStyle("div");
const Viewport = viewportStyle(NavigationPrimitive.Viewport);

const Navbar: React.FC<NavbarProps> = ({
  className,
  style,
  brand,
  brandStyle,
  brandClassName,
  menu,
  actions,
  theme = "light",
  ...rest
}) => {
  const styles = useComponentStyles("navbar", {
    theme: typeof theme === "string" ? theme : undefined,
  });

  const renderBrand = () => {
    return (
      brand && (
        <img
          src={brand}
          className={clsx("navbar-brand ", brandClassName)}
          style={brandStyle}
          alt="brand"
        />
      )
    );
  };

  const renderMenu = () => {
    return (
      <Root {...rest} style={style}>
        <List>
          {menu?.map((item, id) => {
            return (
              <>
                <NavItem
                  key={id}
                  title={item?.label}
                  icon={item?.icon}
                  disabled={item?.disabled}
                  isDropdown={item?.isDropdown}
                  child={item?.child}
                />
                {item?.isDropdown && (
                  <Indicator>
                    <Arrow />
                  </Indicator>
                )}
              </>
            );
          })}
        </List>
        {actions}

        <ViewportWrapper>
          <Viewport />
        </ViewportWrapper>
      </Root>
    );
  };

  return (
    <Stack
      style={style}
      className={clsx("navbar-expand-md", className)}
      sx={styles}
      direction="horizontal"
      justifyContent="space-between"
      {...rest}
    >
      {renderBrand()}
      {renderMenu()}
    </Stack>
  );
};

export default Navbar;
