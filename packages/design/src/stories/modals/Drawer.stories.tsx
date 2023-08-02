/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { StoryFn } from "@storybook/react";
import { Box, Button, Drawer, DrawerProps, Text } from "../../components";

export default {
  title: "Components/Modals & Overlay/Drawer",
  component: Drawer,
  tags: ["autodocs"],
};

const Template: StoryFn<React.PropsWithChildren<DrawerProps>> = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <Box p="md">
      <Text as="p">Click the button below to open the drawer.</Text>
      <Button variant="primary" size="lg" onClick={() => setIsOpen(!isOpen)}>
        Toggle Drawer
      </Button>

      <Drawer {...args} open={isOpen} onClose={toggle}>
        <div
          style={{
            padding: 20,
            display: "flex",
            flex: 1,
            alignContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ fontWeight: "bold" }}>Hello World! 🚀🥳</div>
        </div>
      </Drawer>
    </Box>
  );
};

export const Example = Template.bind({});
Example.args = {
  direction: "left",
  size: 300,
  overlay: true,
};
