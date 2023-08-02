import React from "react";
import { Box } from "../../components/core/layout";

interface ColorSwatchGridProps {
  children: React.ReactNode;
}

const ColorSwatchGrid: React.FC<ColorSwatchGridProps> = ({ children }) => {
  return (
    <Box
      mt="md"
      mb="xl"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 4 - 24px), 1fr))"
      gridGap="24px"
    >
      {children}
    </Box>
  );
};

export default ColorSwatchGrid;
