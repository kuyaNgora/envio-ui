import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Skeleton, SkeletonProps } from "../../../components";

const meta = {
  title: "Components/Feedback/Skeleton",
  component: Skeleton,
  argTypes: {
    type: {
      control: { type: "select" },
      type: { name: "string", required: true },
      options: ["line", "circle"],
      table: {
        type: {
          summary: `line | circle`,
          required: true,
        },
        defaultValue: { summary: "line" },
      },
    },
    size: {
      control: "number",
      table: {
        type: {
          summary: `number`,
          required: true,
        },
        defaultValue: { summary: 24 },
      },
    },
    numberOfLines: {
      control: "number",
      if: { arg: "type", eq: "line" },
      description: "number of lines of the skeleton for type `line`",
      table: {
        type: {
          summary: `number`,
          required: true,
        },
        defaultValue: { summary: 1 },
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
          summary: "CSSProperties",
          detail: null,
        },
        defaultValue: { summary: null },
      },
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
