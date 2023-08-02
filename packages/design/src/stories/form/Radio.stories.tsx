import React from "react";
import { Radio } from "../../components";

export default {
  title: "Components/Forms/Radio",
  component: Radio,
  tags: ["autodocs"],
};

export const Example = () => {
  return (
    <Radio defaultValue="value1">
      <Radio.Item
        label="label 1"
        value="value1"
        onChange={() => console.log("hahah")}
      />
      <Radio.Item
        label="label 2"
        value="value2"
        onChange={() => console.log("hahah")}
      />
      <Radio.Item
        label="label 3"
        value="value3"
        onChange={() => console.log("hahah")}
      />
    </Radio>
  );
};
