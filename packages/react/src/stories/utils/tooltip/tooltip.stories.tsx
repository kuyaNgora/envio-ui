import { StoryFn } from "@storybook/react";
import React from "react";
import { Tooltip, TooltipProps } from "../../../components";

export default {
  title: "Components/Utils/Tooltip",
  component: Tooltip,
  argTypes: {
    placement: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "placement of the tooltip",
      table: {
        type: {
          summary: `top | right | bottom | left`,
          detail: null,
          name: "select",
        },
        defaultValue: { summary: "top" },
      },
    },
    trigger: {
      table: {
        type: {
          summary: `React.ReactNode`,
          detail: null,
        },
        defaultValue: { summary: null },
      },
    },
    content: {
      table: {
        type: {
          summary: `React.ReactNode`,
          detail: null,
        },
        defaultValue: { summary: null },
      },
    },
  },
};

const Template: StoryFn<TooltipProps> = ({ placement }) => {
  return (
    <Tooltip
      placement={placement}
      trigger={<div>trigger</div>}
      content={
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      }
    />
  );
};

export const Example = Template.bind({});
