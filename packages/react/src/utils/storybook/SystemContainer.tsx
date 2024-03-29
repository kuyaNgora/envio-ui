import * as React from "react";
import { Box } from "../../components";
import StoryContainer from "./StoryContainer";

interface SystemContainerProps {
  noBackground?: boolean;
  children?: React.ReactNode;
}

const SystemContainer: React.FC<SystemContainerProps> = ({
  children,
  noBackground = false,
}) => (
  <Box
    flex="1 1 auto"
    px="lg"
    py="xxl"
    backgroundColor={!noBackground ? "white" : undefined}
  >
    <StoryContainer>{children}</StoryContainer>
  </Box>
);

SystemContainer.displayName = "SystemContainer";

export default SystemContainer;
