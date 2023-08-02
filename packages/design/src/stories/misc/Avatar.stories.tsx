import { StoryFn } from "@storybook/react";
import React from "react";
import { Avatar, AvatarProps, Box, Heading } from "../../components";

export default {
  title: "Components/Misc/Avatar",
  tags: ["autodocs"],
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
          summary: "string",
        },
        defaultValue: { summary: "primary" },
      },
    },
    name: {
      control: "text",
    },
    src: {
      control: "text",
    },
    notificationBadge: {
      control: {
        type: "number",
        min: 0,
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

// export const WithIcons: Story<AvatarProps> = (args) => (
//   <Avatar icon={IconUser} {...args} />
// )
// WithIcons.args = {
//   size: "lg",
//   name: "Lorem Ipsum",
//   color: "greymed04",
//   bg: "greylight03",
// }

export const WithLabel: StoryFn<AvatarProps> = ({ name, ...args }) => (
  <Box display="inline-flex" alignItems="center">
    <Avatar name={name} {...args} />
    <Heading as="span" ml="xs" scale={"sm"}>
      {name}
    </Heading>
  </Box>
);
WithLabel.args = {
  size: 50,
  name: "Lorem Ipsum",
  src: "https://s3-ap-southeast-1.amazonaws.com/envio.co.id/production-files/1092hbc0c059h6c.png?v=103024224441203141333411220",
};

export const WithPresence: StoryFn<AvatarProps> = ({ name, ...args }) => {
  return (
    <Box display="inline-flex" alignItems="center">
      <Avatar
        name={name}
        presence={<Box width="100%" height="100%" backgroundColor={"red07"} />}
        {...args}
      />
    </Box>
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
  return (
    <Box display="inline-flex" alignItems="center">
      <Avatar name={name} notificationBadge={notificationBadge} {...args} />
    </Box>
  );
};
WithNotificationBadge.args = {
  size: 50,
  name: "Lorem Ipsum",
  src: "https://s3-ap-southeast-1.amazonaws.com/envio.co.id/production-files/1092hbc0c059h6c.png?v=103024224441203141333411220",
  notificationBadge: 99,
};
