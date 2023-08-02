import { StoryFn } from "@storybook/react";
import React from "react";
import { Progress, ProgressProps } from "../../components";

export default {
  title: "Components/Misc/Progress",
  component: Progress,
  tags: ["autodocs"],
};

const Template: StoryFn<ProgressProps> = () => {
  return <Progress value={96.9} />;
};

export const Example = Template.bind({});
