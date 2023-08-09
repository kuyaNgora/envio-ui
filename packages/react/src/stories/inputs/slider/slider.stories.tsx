import { StoryFn } from "@storybook/react";
import React from "react";
import { Slider, SliderProps } from "../../../components";

export default {
  title: "Components/Inputs/Slider",
  component: Slider,
  argTypes: {
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
    defaultValue: {
      control: "array",
      table: {
        type: {
          summary: `Array<number>`,
        },
        defaultValue: { summary: `[0]` },
      },
    },
    onChange: {
      table: {
        type: {
          summary: `(e: number[]) => void | function`,
          detail: null,
        },
        defaultValue: { summary: null },
      },
    },
    min: {
      control: "number",
      table: {
        type: {
          summary: `number`,
        },
        defaultValue: { summary: 0 },
      },
    },
    max: {
      control: "number",
      table: {
        type: {
          summary: `number`,
        },
        defaultValue: { summary: 100 },
      },
    },
    step: {
      control: "number",
      table: {
        type: {
          summary: `number`,
        },
        defaultValue: { summary: 1 },
      },
    },
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
      table: {
        type: {
          summary: `vertical | horizontal`,
        },
        defaultValue: { summary: "horizontal" },
      },
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      table: {
        type: {
          summary: `ltr | rtl`,
        },
        defaultValue: { summary: "ltr" },
      },
    },
    disabled: {
      control: "boolean",
      table: {
        type: {
          summary: `boolean`,
        },
        defaultValue: { summary: false },
      },
    },
  },
};

const Template: StoryFn<SliderProps> = args => {
  return <Slider {...args} onChange={e => console.log(e, "current value")} />;
};

export const Example = Template.bind({});
