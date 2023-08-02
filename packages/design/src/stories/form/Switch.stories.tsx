import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Switch, SwitchProps } from "../../components";

const meta = {
  title: "Components/Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
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
          summary: "StyleProp",
          detail: null,
        },
        defaultValue: { summary: null },
      },
      control: {
        type: "object",
      },
    },
    value: {
      table: {
        type: {
          summary: "boolean",
          detail: null,
        },
        defaultValue: { summary: false },
      },
    },
    onChange: {
      table: {
        type: {
          summary: "() => void",
          detail: null,
        },
        defaultValue: { summary: null },
      },
    },
    disabled: {
      table: {
        type: {
          summary: "boolean",
          detail: null,
        },
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof Switch>;

const Template: StoryFn<SwitchProps> = ({ label }) => {
  const [value, setValue] = React.useState<boolean>(true);

  return (
    <Switch
      label={label}
      value={value}
      onChange={() => {
        setValue(!value);
      }}
      disabled
    />
  );
};
export const Example = Template.bind({});
Example.args = {
  label: "Place your text",
};

export default meta;
