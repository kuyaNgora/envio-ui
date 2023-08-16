import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import styled from "styled-components";
import {
  shouldForwardProp,
  SxProps,
  sxMixin,
  useComponentStyles,
} from "../../../../system";

export interface TabsTriggerProps
  extends TabsPrimitive.TabsTriggerProps,
    SxProps {}

const Div = styled(TabsPrimitive.TabsTrigger).withConfig<TabsTriggerProps>({
  shouldForwardProp,
})(sxMixin);

const TabTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ children, ...rest }, ref) => {
    const sx = useComponentStyles("tabTrigger");
    return (
      <Div ref={ref} sx={sx} {...rest}>
        {children}
      </Div>
    );
  }
);

export default TabTrigger;
