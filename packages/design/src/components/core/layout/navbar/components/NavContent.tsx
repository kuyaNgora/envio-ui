/* eslint-disable react/no-array-index-key */
import * as NavigationPrimitive from "@radix-ui/react-navigation-menu";
import React from "react";
import styled, { keyframes } from "styled-components";
import { MenuProps } from "./utils";

interface NavContentProps {
  menu?: MenuProps[];
}

const enterFromLeft = keyframes`
from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const enterFromRight = keyframes`
from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const exitToLeft = keyframes`
from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-200px);
  }
`;

const exitToRight = keyframes`
from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(200px);
  }
`;

const UL = styled("ul")`
  display: grid;
  margin: 0;
  column-gap: 10px;
  list-style: none;
`;

const Content = styled(NavigationPrimitive.Content)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 6px;
  padding: 24px;
  animation-duration: 250ms;
  animation-timing-function: ease;
  box-shadow: 0 2px 10px var(--nvo-gray-400);

  &[data-motion="from-start"] {
    animation-name: ${enterFromLeft};
  }

  &[data-motion="from-end"] {
    animation-name: ${enterFromRight};
  }

  &[data-motion="to-start"] {
    animation-name: ${exitToLeft};
  }

  &[data-motion="to-start"] {
    animation-name: ${exitToRight};
  }
`;

const Link = styled("div")`
  display: inline-flex;
  width: 100%;
  outline: none;
  text-decoration: none;
  user-select: none;
  padding: 16px;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 2px var(--violet7);
  }

  &:hover {
    background-color: rgba(var(--nvo-primary-rgb), 0.1);
  }
`;

const ItemHeading = styled("div")`
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--nvo-secondary);
`;

const ItemText = styled("div")`
  color: var(--nvo-gray-700);
  font-weight: 400;
`;

const NavContent: React.FC<
  NavContentProps & NavigationPrimitive.NavigationMenuContentProps
> = ({ menu }) => {
  const renderList = () => {
    return menu?.map((m, id) => (
      <li key={id}>
        <NavigationPrimitive.Link>
          <Link>
            {m?.icon && (
              <div style={{ marginRight: 16 }}>
                {React.createElement(m?.icon, {
                  fill: "var(--nvo-primary)",
                  size: 30,
                })}
              </div>
            )}
            <div>
              <ItemHeading>{m?.label}</ItemHeading>
              <ItemText>{m?.desciption}</ItemText>
            </div>
          </Link>
        </NavigationPrimitive.Link>
      </li>
    ));
  };

  return (
    <Content asChild>
      <UL>{renderList()}</UL>
    </Content>
  );
};

export default NavContent;
