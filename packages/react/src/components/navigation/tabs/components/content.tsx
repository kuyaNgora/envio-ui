import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import styled from "styled-components";
import {
  shouldForwardProp,
  SxProps,
  sxMixin,
  useComponentStyles,
} from "../../../../system";

export interface TabContentProps
  extends TabsPrimitive.TabsContentProps,
    SxProps {}

const Div = styled(TabsPrimitive.TabsContent).withConfig<TabContentProps>({
  shouldForwardProp,
})(sxMixin);

const TabContent = React.forwardRef<HTMLDivElement, TabContentProps>(
  ({ children, ...rest }, ref) => {
    const sx = useComponentStyles("tabContent");
    return (
      <Div ref={ref} sx={sx} {...rest}>
        {children}
      </Div>
    );
  }
);

export default TabContent;
