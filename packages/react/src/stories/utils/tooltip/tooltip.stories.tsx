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
    contentAlign: {
      control: "select",
      options: ["start", "end", "center"],
      description: "placement of the content",
      table: {
        type: {
          summary: `start | end | center`,
          detail: null,
          name: "select",
        },
        defaultValue: { summary: "center" },
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

const Template: StoryFn<TooltipProps> = ({ placement, contentAlign }) => {
  return (
    <Tooltip
      contentAlign={contentAlign}
      placement={placement}
      trigger={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit
        </div>
      }
      content={
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      }
    />
  );
};

export const Example = Template.bind({});
