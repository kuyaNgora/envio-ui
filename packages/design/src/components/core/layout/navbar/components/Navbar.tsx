/* eslint-disable react/no-array-index-key */
import * as NavigationPrimitive from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import React from "react";
import styled, { keyframes } from "styled-components";
import { useComponentStyles } from "../../../../../system";
import { Stack, StackProps } from "../../stack";
import NavItem from "./NavItem";
import { ChildProps } from "./utils";

interface Menu {
  url?: string;
  icon?: React.ComponentType<any>;
  label: string;
  active: string;
  disabled?: boolean;
  isDropdown?: boolean;
  child?: ChildProps[];
}

export interface NavbarProps extends Omit<StackProps, ""> {
  className?: string;
  style?: React.CSSProperties;
  //   brand
  brand?: string;
  brandStyle?: React.CSSProperties;
  brandClassName?: string;
  //   menu
  menu?: Menu[];

  // action
  actions?: React.ReactNode;
}

const Root = styled(NavigationPrimitive.Root)`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  z-index: 1;
  list-style: none;
`;

const List = styled(NavigationPrimitive.List)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 4px;
  border-radius: 6px;
  list-style: none;
  margin: 0;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }`;

const Indicator = styled(NavigationPrimitive.Indicator)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 10px;
  top: 100%;
  overflow: hidden;
  z-index: 1;
  transition: width, transform 250ms ease;

  [data-state="visible"] & {
    animation: ${fadeIn} 200ms ease;
  }

  [data-state="hidden"] & {
    animation: ${fadeOut} 200ms ease;
  }
`;

const Arrow = styled("div")`
  position: relative;
  top: 70%;
  background-color: white;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-top-left-radius: 2px;
`;

const ViewportWrapper = styled("div")`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }`;

const scaleOut = keyframes`
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }`;

const Viewport = styled(NavigationPrimitive.Viewport)`
  position: relative;
  transform-origin: top center;
  margin-top: 10px;
  width: 100%;
  background-color: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  height: var(--radix-navigation-menu-viewport-height);
  transition: width, height, 300ms ease;

  &[data-state="open"] {
    animation: ${scaleIn} 200ms ease;
  }
  &[data-state="closed"] {
    animation: ${scaleOut} 200ms ease;
  }
`;

const Navbar: React.FC<NavbarProps> = ({
  className,
  style,
  brand,
  brandStyle,
  brandClassName,
  menu,
  actions,
  ...rest
}) => {
  const styles = useComponentStyles("navbar");

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
      menu && (
        <Root {...rest} style={style}>
          <List>
            {menu?.map((item, id) => {
              return (
                <NavItem
                  key={id}
                  title={item?.label}
                  icon={item?.icon}
                  disabled={item?.disabled}
                  isDropdown={item?.isDropdown}
                  child={item?.child}
                />
              );
            })}
            <Indicator>
              <Arrow />
            </Indicator>
          </List>

          <ViewportWrapper>
            <Viewport />
          </ViewportWrapper>
        </Root>
      )
    );
  };

  return (
    <Stack
      style={style}
      className={clsx("navbar-expand-md", className)}
      sx={styles}
      {...rest}
      direction="horizontal"
      justifyContent="space-between"
    >
      {renderBrand()}
      {renderMenu()}
    </Stack>
  );
};

export default Navbar;
