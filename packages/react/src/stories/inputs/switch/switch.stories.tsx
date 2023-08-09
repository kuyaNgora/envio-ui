import React from "react";
import { Switch, SwitchProps } from "../../../components";

export default {
  title: "Components/Inputs/Switch",
  component: Switch,
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
          summary: "StyleProp",
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
};

export const Example: React.FC<SwitchProps> = () => {
  const [value, setValue] = React.useState<boolean>(true);

  return (
    <Switch
      label="Place label here"
      value={value}
      onChange={() => {
        setValue(!value);
      }}
    />
  );
};
