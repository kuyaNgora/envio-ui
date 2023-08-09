import * as React from "react";
import { Box } from "../../components";
import SystemContainer from "./SystemContainer";
import SystemHeader from "./SystemHeader";

interface SystemBlockProps {
  title: string;
  subtitle?: React.ReactNode;
  noBackground?: boolean;
  children?: React.ReactNode;
}

const SystemBlock: React.FC<SystemBlockProps> = ({
  children,
  title,
  subtitle,
  noBackground,
}) => (
  <Box
    display="flex"
    flexDirection="column"
    position="relative"
    width="100%"
    height="100%"
    minHeight="100%"
  >
    <SystemHeader title={title} subtitle={subtitle} />
    <SystemContainer noBackground={noBackground}>{children}</SystemContainer>
  </Box>
);

SystemBlock.displayName = "SystemBlock";

export default SystemBlock;
