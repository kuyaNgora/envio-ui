/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { StoryFn } from "@storybook/react";
import { Tabs, Text } from "../../../components";

export default {
  title: "Components/Navigation/Tabs",
  component: Tabs,
  parameters: {
    backgrounds: {
      default: "dark",
      value: [
        {
          name: "dark",
          value: "#b6b2b2",
        },
      ],
    },
  },
  argTypes: {
    // root
    asChild: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: false },
      },
    },
    defaultValue: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    value: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    onValueChange: {
      table: {
        type: {
          summary: `(value: string) => void`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
    },
    orientation: {
      table: {
        type: {
          summary: `horizontal | vertical`,
          detail: null,
        },
        defaultValue: { summary: "horizontal" },
      },
    },
    dir: {
      table: {
        type: {
          summary: `ltr | rtl`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
    },
    activationMode: {
      table: {
        type: {
          summary: `automatic | manual`,
          detail: null,
        },
        defaultValue: { summary: "automatic" },
      },
    },
    // list
    loop: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: true },
      },
    },
    // trigger
    disabled: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: false },
      },
    },
    //  content
    forceMount: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
    },
  },
};

const Template: StoryFn<React.PropsWithChildren> = () => {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.Header>
        <Tabs.Trigger value="tab1">tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">tab 3</Tabs.Trigger>
        <Tabs.Trigger value="tab4">tab 4</Tabs.Trigger>
        <Tabs.Trigger value="tab5">tab 5</Tabs.Trigger>
      </Tabs.Header>
      <Tabs.Content value="tab1">
        <Text>content tab 1</Text>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <Text>content tab 2</Text>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <Text>content tab 3</Text>
      </Tabs.Content>
      <Tabs.Content value="tab4">
        <Text>content tab 4</Text>
      </Tabs.Content>
      <Tabs.Content value="tab5">
        <Text>content tab 5</Text>
      </Tabs.Content>
    </Tabs>
  );
};

export const Example = Template.bind({});
