import { StoryFn } from "@storybook/react";
import React from "react";
import { Label, LabelProps } from "../../components";

export default {
  title: "Components/Misc/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "outline-primary",
        "outline-secondary",
        "outline-success",
        "outline-warning",
      ],
      control: {
        type: "select",
      },
    },
  },
};

const Template: StoryFn<React.PropsWithChildren<LabelProps>> = args => (
  <Label {...args}> {args?.children}</Label>
);

export const Example = Template.bind({});
Example.args = {
  variant: "outline-secondary",
  children: "label",
};
