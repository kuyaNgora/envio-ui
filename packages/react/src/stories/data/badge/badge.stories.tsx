import { StoryFn } from "@storybook/react";
import React from "react";
import { Badge, BadgeProps } from "../../../components";

export default {
  title: "Components/Data & Display/Badge",
  component: Badge,
  argTypes: {
    value: {
      control: {
        type: "number",
        min: 0,
      },
    },
    size: {
      control: {
        type: "number",
        min: 4,
      },
      if: { arg: "value", eq: 0 },
    },
  },
};

const Template: StoryFn<React.PropsWithChildren<BadgeProps>> = args => (
  <Badge {...args} />
);

export const Example = Template.bind({});
Example.args = {
  value: 0,
};
