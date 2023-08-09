import React from "react";
import { Box, BoxProps, Text } from "../../components";
import { theme } from "../../themes";

interface SpacingBlockProps extends BoxProps {
  spacing: string;
}

const SpacingBlock: React.FC<SpacingBlockProps> = ({ spacing, ...rest }) => {
  return (
    <Box display="flex" alignItems="center" {...rest}>
      <Box mr="md" flex="0 1 200px">
        <Text fontFamily="monospace">
          spacing: {spacing} (
          {theme.space[spacing as keyof (typeof theme)["space"]]}
          px)
        </Text>
      </Box>
      <Box width={100} height={spacing} backgroundColor="primary" />
    </Box>
  );
};

export default SpacingBlock;
