import React from "react";
import { Radio, RadioProps } from "../../../components";

export default {
  title: "Components/Inputs/Radio",
  component: Radio,
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
        defaultValue: { summary: "" },
      },
    },
    defaultValue: {
      table: {
        type: {
          summary: "string",
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    label: {
      table: {
        type: {
          summary: "string",
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    value: {
      table: {
        type: {
          summary: "string",
          detail: null,
        },
        defaultValue: { summary: "" },
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

export const Example: React.FC<RadioProps> = () => {
  const [value, setValue] = React.useState<string>("1");

  return (
    <Radio.Group defaultValue={value} onValueChange={v => setValue(v)}>
      <Radio.Item label="label 1" value="1" />
      <Radio.Item label="label 2" value="2" />
      <Radio.Item label="label 3" value="3" />
    </Radio.Group>
  );
};
