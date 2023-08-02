import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Skeleton, SkeletonProps } from "../../components";

const meta = {
  title: "Components/Misc/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["line", "circle"],
    },
    size: {
      control: "number",
    },
    numberOfLines: {
      control: "number",
      if: { arg: "type", eq: "line" },
    },
  },
} satisfies Meta<typeof Skeleton>;

const Template: StoryFn<SkeletonProps> = ({ size, type, numberOfLines }) => (
  <Skeleton size={size} type={type} numberOfLines={numberOfLines} />
);

export const Example = Template.bind({});
Example.args = {
  type: "line",
  numberOfLines: 1,
  size: 24,
};

export default meta;
