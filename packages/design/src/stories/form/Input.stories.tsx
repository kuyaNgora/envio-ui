import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { IconAlertCircle } from "@envio-ui/icons";
import { Input, InputProps } from "../../components";

const meta = {
  title: "Components/Forms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    style: {
      defaultValue: {},
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
    className: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    disabled: {
      table: {
        type: {
          summary: `true | false`,
        },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    required: {
      table: {
        type: {
          summary: `true | false`,
        },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    label: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
      control: "text",
    },
    hint: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
      control: "text",
    },
    error: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
      control: "text",
    },
  },
} satisfies Meta<typeof Input>;

const Template: StoryFn<InputProps> = ({
  required,
  label,
  hint,
  error,
  disabled,
  _prefix,
  _surfix,
}) => {
  return (
    <Input
      label={label}
      required={required}
      hint={hint}
      error={error}
      disabled={disabled}
      _prefix={_prefix}
      _surfix={_surfix}
    />
  );
};

export const Example = Template.bind({});
Example.args = {
  label: "Insert label here",
  _prefix: "_prefix",
  _surfix: IconAlertCircle,
};
export default meta;
