/* eslint-disable react/no-array-index-key */
import * as NavigationPrimitive from "@radix-ui/react-navigation-menu";
import React from "react";
import {
  ChildProps,
  contentStyle,
  itemBodyStyle,
  itemHeadingStyle,
  linkStyle,
  ulStyle,
} from "./utils";
import { Stack } from "../../../layout";

interface NavContentProps {
  menu?: ChildProps[];
}

const UL = ulStyle("ul");

const Content = contentStyle(NavigationPrimitive.Content);

const Link = linkStyle("div");

const ItemHeading = itemHeadingStyle("div");

const ItemText = itemBodyStyle("div");

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
            <Stack>
              <ItemHeading>{m?.label}</ItemHeading>
              <ItemText>{m?.desciption}</ItemText>
            </Stack>
          </Link>
        </NavigationPrimitive.Link>
      </li>
    ));
  };

  return (
    <Content>
      <UL>{renderList()}</UL>
    </Content>
  );
};

export default NavContent;
