import React from "react";
import { Checkbox, CheckboxProps } from "../../../components";

export default {
  title: "Components/Inputs/Checkbox",
  component: Checkbox,
  argTypes: {
    label: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
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
          summary: `() => void | function`,
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
};

export const Example: React.FC<CheckboxProps> = () => {
  const [value, setValue] = React.useState<boolean>(true);

  return (
    <Checkbox
      label="Place label here"
      value={value}
      onChange={() => {
        setValue(!value);
      }}
    />
  );
};
