/* eslint-disable react/no-array-index-key */
import * as NavigationPrimitive from "@radix-ui/react-navigation-menu";
import React from "react";
import { contentStyle, ulStyle } from "./utils";

export interface NavContentProps {
  children?: React.ReactNode;
}

const UL = ulStyle("ul");
const Content = contentStyle(NavigationPrimitive.Content);

const NavContent: React.FC<
  NavContentProps & NavigationPrimitive.NavigationMenuContentProps
> = ({ children }) => {
  // const renderList = () => {
  //   return menu?.map((m, id) => (
  //     <li key={id}>
  //       <NavigationPrimitive.Link onClick={onClick} active={isActive}>
  //         <Link>
  //           {m?.icon && (
  //             <div style={{ marginRight: 16 }}>
  //               {React.createElement(m?.icon, {
  //                 fill: "var(--nvo-primary)",
  //                 size: 18,
  //               })}
  //             </div>
  //           )}
  //           <Stack justifyContent="center">
  //             <ItemHeading>{m?.label}</ItemHeading>
  //             {m?.desciption && <ItemText>{m?.desciption}</ItemText>}
  //           </Stack>
  //         </Link>
  //       </NavigationPrimitive.Link>
  //     </li>
  //   ));
  // };

  return (
    <Content>
      <UL>{children}</UL>
    </Content>
  );
};

export default NavContent;
