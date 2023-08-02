import { IconEdit } from "@envio-ui/icons";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from "../../components";

const meta = {
  title: "Components/Forms/Button",
  component: Button,
  tags: ["autodocs"],
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
    },
    size: {
      options: ["sm", "md", "lg"],
      control: "select",
    },
    block: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    selected: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
    onClick: {
      action: "clicked",
    },
    iconSize: {
      control: "number",
    },
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
  },
} satisfies Meta<typeof Button>;

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
  icon: IconEdit,
  iconPosition: "left",
  iconSize: 24,
};

export const IconOnly: StoryFn<ButtonProps> = Template.bind({});
IconOnly.args = {
  ...Example.args,
  children: "",
  icon: IconEdit,
  iconPosition: "left",
  iconSize: 24,
};

export default meta;
