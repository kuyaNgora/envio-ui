import { StoryFn } from "@storybook/react";
import React from "react";
import { Spinner, SpinnerProps } from "../../components";

export default {
  title: "Components/Misc/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: [16, 24, 32, 48],
    },
    variant: {
      options: ["primary", "secondary", "warning", "danger", "info", "success"],
      control: "select",
    },
  },
};

const Template: StoryFn<SpinnerProps> = ({ size, variant }) => {
  return <Spinner size={size} variant={variant} />;
};

export const Example = Template.bind({});
Example.args = {
  size: 24,
  variant: "primary",
};
