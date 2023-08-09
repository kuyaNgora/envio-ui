/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { StoryFn } from "@storybook/react";
import { Box, Button, Drawer, DrawerProps, Text } from "../../../components";

export default {
  title: "Components/Navigation/Drawer",
  component: Drawer,
  argTypes: {
    children: {
      table: {
        type: {
          summary: `React.ReactNode`,
          detail: null,
        },
        defaultValue: { summary: null },
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
          summary: "CSSProperties",
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
    },
    open: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: false },
      },
    },
    onClose: {
      table: {
        type: {
          summary: `VoidFunction`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
    },
    direction: {
      table: {
        type: {
          summary: `left | right | top | bottom`,
          detail: null,
        },
        defaultValue: { summary: "top" },
      },
    },
    overlay: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: true },
      },
    },
    overlayColor: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "#000000" },
      },
    },
    overlayOpacity: {
      table: {
        type: {
          summary: `number`,
          detail: null,
        },
        defaultValue: { summary: 0.1 },
      },
    },
    zIndex: {
      table: {
        type: {
          summary: `number`,
          detail: null,
        },
        defaultValue: { summary: 100 },
      },
    },
    size: {
      table: {
        type: {
          summary: `number | string`,
          detail: null,
        },
        defaultValue: { summary: 250 },
      },
    },
    lockBackgroundScroll: {
      table: {
        type: {
          summary: `boolean`,
          detail: null,
        },
        defaultValue: { summary: false },
      },
    },
    customIdSuffix: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
  },
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
