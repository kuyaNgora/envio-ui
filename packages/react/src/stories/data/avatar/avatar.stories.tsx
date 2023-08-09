import { StoryFn } from "@storybook/react";
import React from "react";
import { Person } from "@envio-ui/icons";
import { Avatar, AvatarProps, Box } from "../../../components";

export default {
  title: "Components/Data & Display/Avatar",
  argTypes: {
    size: {
      control: "number",
      type: { name: "number", required: true },
      description: "Size of the avatar",
      table: {
        type: {
          summary: "number",
          min: 32,
        },
        defaultValue: { summary: "50" },
      },
    },
    variant: {
      options: ["primary", "secondary", "success", "warning"],
      control: "select",
      type: { name: "select", required: false },
      description: "Variant of the avatar ",
      table: {
        type: {
          summary: `primary | secondary | success | warning`,
        },
        defaultValue: { summary: "primary" },
      },
    },
    name: {
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "-" },
      },
    },
    src: {
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "-" },
      },
    },
    notificationBadge: {
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: "-" },
      },
    },
  },
};

const Template: StoryFn<AvatarProps> = args => <Avatar {...args} />;

export const WithInitialName = Template.bind({});
WithInitialName.args = {
  size: 50,
  variant: "primary",
  name: "Lorem Ipsum",
};

export const WithImage = Template.bind({});
WithImage.args = {
  size: 50,
  name: "Lorem Ipsum",
  src: "https://s3-ap-southeast-1.amazonaws.com/envio.co.id/production-files/1092hbc0c059h6c.png?v=103024224441203141333411220",
};

export const WithIcons: StoryFn<AvatarProps> = args => (
  <Avatar icon={Person} {...args} />
);
WithIcons.args = {
  size: 50,
  name: "Lorem Ipsum",
  color: "#fff",
};

export const WithPresence: StoryFn<AvatarProps> = ({ name, ...args }) => {
  return (
    <Avatar
      name={name}
      presence={<Box width="100%" height="100%" backgroundColor={"red07"} />}
      {...args}
    />
  );
};
WithPresence.args = {
  size: 50,
  name: "Lorem Ipsum",
  src: "https://s3-ap-southeast-1.amazonaws.com/envio.co.id/production-files/1092hbc0c059h6c.png?v=103024224441203141333411220",
};

export const WithNotificationBadge: StoryFn<AvatarProps> = ({
  name,
  notificationBadge,
  ...args
}) => {
  return <Avatar name={name} notificationBadge={notificationBadge} {...args} />;
};
WithNotificationBadge.args = {
  size: 50,
  name: "Lorem Ipsum",
  src: "https://s3-ap-southeast-1.amazonaws.com/envio.co.id/production-files/1092hbc0c059h6c.png?v=103024224441203141333411220",
  notificationBadge: 99,
};
