import { Edit } from "@envio-ui/icons";
import { StoryFn } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from "../../../components";

export default {
  title: "Components/Inputs/Button",
  component: Button,
  argTypes: {
    variant: {
      table: {
        type: {
          summary: `default | primary | outline-primary | ghost-primary | secondary | outline-secondary | ghost-secondary | danger | outline-danger | ghost-danger | success | outline-success | ghost-success | warning | outline-warning | ghost-warning`,
          detail: null,
        },
        defaultValue: { summary: "default" },
      },
      options: [
        "default",
        "primary",
        "outline-primary",
        "ghost-primary",
        "secondary",
        "outline-secondary",
        "ghost-secondary",
        "danger",
        "outline-danger",
        "ghost-danger",
        "success",
        "outline-success",
        "ghost-success",
        "warning",
        "outline-warning",
        "ghost-warning",
      ],
      control: "select",
      description: "The variant of the button.",
    },
    size: {
      table: {
        type: {
          summary: `sm | md | lg`,
          detail: null,
        },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: "select",
      description: "The size of the button.",
    },
    block: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
      description: "Is a block button.",
    },
    disabled: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    loading: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
      description: "True if the button is disabled due to loading.",
    },
    children: {
      table: {
        type: {
          summary: `React.ReactNode`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
      control: "text",
    },
    onClick: {
      table: {
        type: {
          summary: `MouseEventHandler<HTMLButtonElement>`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
      action: "clicked",
    },
    icon: {
      table: {
        type: {
          summary: `ComponentType<any>`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description: "The icon that renders with the button.",
    },
    iconSize: {
      table: {
        type: {
          summary: `number`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
      description: "The size of the icon.",
      control: "number",
    },
    iconPosition: {
      table: {
        type: {
          summary: `left | right`,
          detail: null,
        },
        defaultValue: { summary: "left" },
      },
      description: "Icon position.",
    },
    className: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
      description: "Additional CSS classes to give to the component.",
    },
    style: {
      defaultValue: {},
      table: {
        type: {
          summary: "CSSProperties",
          detail: null,
        },
        defaultValue: { summary: null },
      },
      control: {
        type: "object",
      },
      description: "Additional CSS styles to give to the component.",
    },
  },
};

const Template: StoryFn<ButtonProps> = ({
  variant,
  size,
  block,
  disabled,
  loading,
  selected,
  icon,
  iconPosition,
  iconSize,
  onClick,
  children,
  shape,
  className,
  style,
}) => (
  <Button
    type="button"
    variant={variant}
    size={size}
    block={block}
    disabled={disabled}
    loading={loading}
    selected={selected}
    icon={icon}
    iconPosition={iconPosition}
    iconSize={iconSize}
    onClick={onClick}
    shape={shape}
    className={className}
    style={style}
  >
    {children}
  </Button>
);

export const Example = Template.bind({});
Example.args = {
  variant: "primary",
  children: "Push Me",
  size: "md",
  block: false,
  disabled: false,
  loading: false,
  selected: false,
};

export const WithIcon: StoryFn<ButtonProps> = Template.bind({});
WithIcon.args = {
  ...Example.args,
  icon: Edit,
  iconPosition: "left",
  iconSize: 24,
};

export const IconOnly: StoryFn<ButtonProps> = Template.bind({});
IconOnly.args = {
  ...Example.args,
  children: "",
  icon: Edit,
  iconPosition: "left",
  iconSize: 24,
};
