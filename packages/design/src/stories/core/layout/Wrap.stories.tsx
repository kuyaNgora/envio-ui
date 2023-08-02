import { StoryFn } from "@storybook/react";
import React from "react";
import { Box, Label, Wrap, WrapProps } from "../../../components";

export default {
  title: "Core/Layout/Wrap",
  component: Wrap,
  tags: ["autodocs"],
  argTypes: {
    spacing: {
      options: ["xxxs", "xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
      control: { type: "select" },
    },
  },
};

export const Example: StoryFn<WrapProps> = ({ spacing }) => {
  return (
    <Box width={300}>
      <Wrap spacing={spacing}>
        <Wrap.Item>
          <Label>label 1</Label>
        </Wrap.Item>
        <Wrap.Item>
          <Label>Label 2</Label>
        </Wrap.Item>
        <Wrap.Item>
          <Label>Label 3</Label>
        </Wrap.Item>
        <Wrap.Item>
          <Label>Label 4</Label>
        </Wrap.Item>
        <Wrap.Item>
          <Label>Label 5</Label>
        </Wrap.Item>
        <Wrap.Item>
          <Label>Label 6</Label>
        </Wrap.Item>
        <Wrap.Item>
          <Label>Label 7</Label>
        </Wrap.Item>
      </Wrap>
    </Box>
  );
};

Example.args = {
  spacing: "xs",
};
