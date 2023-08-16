import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import styled from "styled-components";
import {
  shouldForwardProp,
  SxProps,
  sxMixin,
  useComponentStyles,
} from "../../../../system";

export interface TabHeaderProps extends TabsPrimitive.TabsListProps, SxProps {}

const Div = styled(TabsPrimitive.TabsList).withConfig<TabHeaderProps>({
  shouldForwardProp,
})(sxMixin);

const TabHeader = React.forwardRef<HTMLDivElement, TabHeaderProps>(
  ({ children, ...rest }, ref) => {
    const sx = useComponentStyles("tabHeader");

    return (
      <Div ref={ref} sx={sx} {...rest}>
        {children}
      </Div>
    );
  }
);

export default TabHeader;
