import React from "react";
import { StoryFn } from "@storybook/react";
import { IconAlertCircle } from "@envio-ui/icons";
import { Input, InputProps } from "../../../components";

export default {
  title: "Components/Inputs/Input",
  component: Input,
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
    },
    required: {
      table: {
        type: {
          summary: `true | false`,
        },
        defaultValue: { summary: false },
      },
    },
    label: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    hint: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    error: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    _prefix: {
      table: {
        type: {
          summary: `React.ComponentType<any> | string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    _surfix: {
      table: {
        type: {
          summary: `React.ComponentType<any> | string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
  },
};

const Template: StoryFn<InputProps> = ({
  required,
  label,
  hint,
  error,
  disabled,
  _prefix,
  _surfix,
}) => {
  const [value, setValue] = React.useState<string>("");

  return (
    <Input
      label={label}
      required={required}
      hint={hint}
      error={error}
      disabled={disabled}
      _prefix={_prefix}
      _surfix={_surfix}
      value={value}
      onChange={e => {
        setValue(e?.target?.value);
      }}
    />
  );
};

export const Simple = Template.bind({});

export const Advance = Template.bind({});
Advance.args = {
  label: "Insert label here",
  _prefix: "_prefix",
  _surfix: IconAlertCircle,
};

export const Validation = Template.bind({});
Validation.args = {
  required: true,
  label: "Insert label here",
  _prefix: "_prefix",
  _surfix: IconAlertCircle,
  error: "error message is here",
  hint: "insert hint here",
};
