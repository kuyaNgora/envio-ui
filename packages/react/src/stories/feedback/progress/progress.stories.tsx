import { StoryFn } from "@storybook/react";
import React from "react";
import { Progress, ProgressProps } from "../../../components";

export default {
  title: "Components/Feedback/Progress",
  component: Progress,
  argTypes: {
    value: {
      control: "number",
      type: { name: "number", required: true },
      description: "value of the progress",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: "0" },
      },
    },
  },
};

const Template: StoryFn<ProgressProps> = () => {
  return <Progress value={96.9} />;
};

export const Example = Template.bind({});
