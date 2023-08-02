import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Checkbox, CheckboxProps } from "../../components";

const meta = {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

const Template: StoryFn<CheckboxProps> = ({ label }) => {
  const [value, setValue] = React.useState<boolean>(true);
  const [value2, setValue2] = React.useState<boolean>(true);
  const [value3, setValue3] = React.useState<boolean>(true);

  return (
    <>
      <Checkbox
        label={label}
        value={value}
        onChange={() => {
          setValue(!value);
        }}
      />
      <Checkbox
        label={label}
        value={value2}
        onChange={() => {
          setValue2(!value2);
        }}
      />
      <Checkbox
        label={label}
        value={value3}
        onChange={() => {
          setValue3(!value3);
        }}
      />
    </>
  );
};
export const Example = Template.bind({});
Example.args = {
  label: "Place your text",
};

export default meta;
