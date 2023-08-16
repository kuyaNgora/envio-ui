import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import styled from "styled-components";
import {
  shouldForwardProp,
  SxProps,
  sxMixin,
  useComponentStyles,
} from "../../../../system";
import TabHeader from "./header";
import TabTrigger from "./trigger";
import TabContent from "./content";

export interface TabRoot extends TabsPrimitive.TabsProps, SxProps {}

const Div = styled(TabsPrimitive.Root).withConfig<TabRoot>({
  shouldForwardProp,
})(sxMixin);

const Tabs = React.forwardRef<HTMLDivElement, TabRoot>(
  ({ children, ...rest }, ref) => {
    const sx = useComponentStyles("tabRoot");

    return (
      <Div ref={ref} sx={sx} {...rest}>
        {children}
      </Div>
    );
  }
);

export default Object.assign(Tabs, {
  Header: TabHeader,
  Trigger: TabTrigger,
  Content: TabContent,
});
