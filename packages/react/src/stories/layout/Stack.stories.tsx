import { StoryFn } from "@storybook/react";
import React from "react";
import { Box, Stack, StackProps, Text } from "../../components";

export default {
  title: "Components/Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    spacing: {
      options: ["xxxs", "xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
      control: { type: "select" },
    },
    direction: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
  },
};

export const Example: StoryFn<StackProps> = ({ spacing, direction }) => {
  return (
    <Box backgroundColor="primary">
      <Stack spacing={spacing} direction={direction}>
        <Box backgroundColor="white">
          <Text>Box (backgroundColor=white)</Text>
        </Box>
        <Box backgroundColor="white">
          <Text>Box (backgroundColor=white)</Text>
        </Box>
        <Box backgroundColor="white">
          <Text>Box (backgroundColor=white)</Text>
        </Box>
      </Stack>
    </Box>
  );
};

Example.args = {
  spacing: "md",
  direction: "horizontal",
};
