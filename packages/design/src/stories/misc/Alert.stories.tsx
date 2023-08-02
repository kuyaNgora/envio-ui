import { StoryFn } from "@storybook/react";
import React from "react";
import { Alert, AlertProps, Button } from "../../components";

export default {
  title: "Components/Misc/Alert",
  component: Alert,
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
    variant: {
      table: {
        type: {
          summary: `default | primary | danger | success | warning`,
          detail: null,
        },
        defaultValue: { summary: "default" },
      },

      options: ["default", "primary", "danger", "success", "warning"],
      control: "select",
    },
    visible: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    leftIcon: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    leftIconSize: {
      table: {
        type: {
          summary: `string | number`,
          detail: null,
        },
        defaultValue: { summary: 25 },
      },
      control: "number",
    },
    closeButton: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    onClose: {
      table: {
        type: {
          summary: `() => void | null`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    actions: {
      table: {
        type: {
          summary: `React.ReactNode`,
          detail: null,
        },
        defaultValue: { summary: null },
      },
    },
    message: {
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
};

const Template: StoryFn<React.PropsWithChildren<AlertProps>> = args => (
  <Alert {...args} />
);

export const Example = Template.bind({});
Example.args = {
  visible: true,
  variant: "default",
  message: "Insert information here",
  leftIcon: true,
  leftIconSize: 25,
  closeButton: true,
};

export const WithActions: StoryFn<
  React.PropsWithChildren<AlertProps>
> = args => (
  <Alert
    {...args}
    actions={
      <Button
        variant="ghost-primary"
        size="sm"
        onClick={() => console.log("actions")}
        style={{
          backgroundColor: "transparent",
          height: 20,
        }}
        p="xs"
      >
        action
      </Button>
    }
  />
);
WithActions.args = {
  ...Example.args,
};
