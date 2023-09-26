import React from "react";
import { StoryFn } from "@storybook/react";
import { Textarea, TextareaProps } from "../../../components";

export default {
  title: "Components/Inputs/Textarea",
  component: Textarea,
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
  },
};

const Template: StoryFn<TextareaProps> = ({
  required,
  label,
  hint,
  error,
  disabled,
  ...rest
}) => {
  const [value, setValue] = React.useState<string>("");

  return (
    <Textarea
      rows={4}
      label={label}
      required={required}
      hint={hint}
      error={error}
      disabled={disabled}
      value={value}
      {...rest}
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
};

export const Validation = Template.bind({});
Validation.args = {
  required: true,
  label: "Insert label here",
  hint: "insert hint here",
  placeholder: "address",
  error: "insert error here",
};
