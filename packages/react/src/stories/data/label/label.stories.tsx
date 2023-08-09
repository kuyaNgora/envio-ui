import { StoryFn } from "@storybook/react";
import React from "react";
import { Label, LabelProps } from "../../../components";

export default {
  title: "Components/Data & Display/Label",
  component: Label,
  argTypes: {
    variant: {
      table: {
        type: {
          summary: `primary | secondary | success | warning | outline-primary | outline-secondary | outline-success | outline-warning`,
        },
        defaultValue: { summary: "outline-secondary" },
      },
    },
    className: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    style: {
      table: {
        type: {
          summary: "StyleProp",
          detail: null,
        },
        defaultValue: { summary: null },
      },
    },
  },
};

const Template: StoryFn<React.PropsWithChildren<LabelProps>> = args => (
  <Label {...args}> {args?.children}</Label>
);

export const Example = Template.bind({});
Example.args = {
  children: "label",
};
