import React from "react";
import { Box } from "../../components/core";

interface ElevationGridProps {
  children: React.ReactNode;
}

const ElevationGrid: React.FC<ElevationGridProps> = ({ children }) => {
  return (
    <Box
      mt="md"
      mb="xl"
      p="xxl"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 3 - 24px), 1fr))"
      gridGap="24px"
      backgroundColor="greylight02"
    >
      {children}
    </Box>
  );
};

export default ElevationGrid;
